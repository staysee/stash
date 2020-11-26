import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import RecipesPage from '../RecipesPage/RecipesPage';
import AddRecipe from '../AddRecipe/AddRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';
import MealsPage from '../MealsPage/MealsPage';
import NotFoundPage from '../../NotFoundPage';
import StashContext from '../../StashContext';
import RecipesService from '../../services/recipe-service';
import MealsService from '../../services/meal-service';
// import store from '../../store'

import './App.css';

class App extends React.Component {
  static contextType = StashContext;

  state = {
    loading: false,
    recipes: [],
    meals: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    },
    // loggedin: true
  };

//  updateLoggedIn = (status) => {
//    this.setState({
//      loggedin: status
//    });
//  }

 componentDidMount() {
   this.rehydrateApp();
 }

  rehydrateApp = async (location = 'App') => {
    console.log('location', location);
    await Promise.all([
      await this.fetchUserRecipes(),
      await this.fetchUserMeals(),
    ]);
  };

  setLoading = (status) => {
    this.setState({
      loading: status,
    });
  };

  fetchUserRecipes = async () => {
    const recipes = await RecipesService.getUserRecipes();
    this.setState({
      recipes,
    });
  };

  fetchUserMeals = async () => {
    const meals = await MealsService.getUserMeals();
    const days = Object.keys(meals);

    days.forEach((day) => {
      const existingDayMeals = this.state.meals[day] || [];

      this.setState({
        meals: {
          ...this.state.meals,
          [day]: [...meals[day], ...existingDayMeals],
        },
      });
    });
  };

  addRecipe = async (recipe) => {
    const newRecipe = [...this.state.recipes, recipe];
    this.setState({
      recipes: newRecipe,
    });

    console.log('addRecipe', recipe);
    try {
      const resolve = await RecipesService.insertNewRecipe({ ...recipe, user_id: 1 });
      console.log('resolve', resolve);
    } catch (error) {
      console.log('add recipe failed: ', error);
    }
  };

  deleteRecipe = async (recipeId) => {
    const newRecipes = this.state.recipes.filter((recipe) => recipe.id !== recipeId);
    this.setState({
      recipes: newRecipes,
    });

    try {
      const resolve = await RecipesService.deleteRecipe(recipeId);
      console.log('resolve', resolve);
    } catch (error) {
      console.log('delete recipe failed: ', error);
    }
  };

  updateRecipe = async (updatedRecipe) => {
    console.log('update this recipe');
    this.setState({
      recipes: this.state.recipes.map((recipe) => (
        recipe.id !== updatedRecipe.id ? recipe : updatedRecipe)),
    });

    try {
      const resolve = await RecipesService.updateRecipe(updatedRecipe);
      console.log('resolve', resolve);
      await this.fetchUserRecipes();
    } catch (error) {
      console.log('update recipe failed: ', error);
    }
  };

  addMeal = async (meal) => {
    this.setState((prevState) => ({
      // copy existing state
      ...prevState,
      // update meals key
      meals: {
        // copy existing meals state
        ...prevState.meals,
        // update day key & filter meals array by id
        [meal.day]: [...prevState.meals[meal.day], meal],
      },
    }));

    try {
      const resolve = await MealsService.addMeal(meal);
      console.log('resolve', resolve);
    } catch (error) {
      console.log('add meal failed: ', error);
    }
  };

  deleteMeal = async (day, mealId) => {
    console.log('DAY', day);
    console.log('MEALID', mealId);
    this.setState((prevState) => ({
      // copy existing state
      ...prevState,
      // update meals key
      meals: {
        // copy existing meals state
        ...prevState.meals,
        // update day key & filter meals array by id
        [day]: prevState.meals[day].filter(({ id }) => id !== mealId),
      },
    }));

    try {
      const resolve = await MealsService.deleteMeal(mealId);
      console.log('resolve', resolve);
    } catch (error) {
      console.log('delete meal failed: ', error);
    }
  };

  render() {
    const contextValue = {
      loading: this.state.loading,
      setLoading: this.setLoading,
      recipes: this.state.recipes,
      meals: this.state.meals,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updateRecipe: this.updateRecipe,
      addMeal: this.addMeal,
      deleteMeal: this.deleteMeal,
      rehydrateApp: this.rehydrateApp,
      userLogOut: this.userLogOut,
    };
    const { handleLogOut } = this.props;

    return (
      <StashContext.Provider value={contextValue}>
        <main className="App">
          <Navigation handleLogOut={handleLogOut} />
          <Switch>
            <Route exact path="/recipes/" component={RecipesPage} />
            <Route exact path="/recipes/meals" component={MealsPage} />
            <Route exact path="/recipes/new-recipe" component={AddRecipe} />
            <Route exact path="/recipes/edit-recipe/:recipe_id" component={EditRecipe} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </StashContext.Provider>
    );
  }
}

export default App;

App.propTypes = {
  handleLogOut: PropTypes.func
};
