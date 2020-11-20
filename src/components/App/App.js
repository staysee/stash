import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import RecipesPage from '../RecipesPage/RecipesPage';
import AddRecipe from '../AddRecipe/AddRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';
import MealsPage from '../MealsPage/MealsPage';
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
  };

  componentDidMount() {
    this.rehydrateApp();
  }

  rehydrateApp = async (location = 'App') => {
    console.log('location', location);
    await Promise.all([
      await this.fetchUserRecipes(),
      await this.fetchUserMeals(),
      // await this.fetchAllUsers()
    ]);
  };

  setLoading = (status) => {
    this.setState({
      loading: status,
    });
  };

  // fetchAllRecipes = async () => {
  // const recipes = await RecipesService.getAllRecipes()
  // this.setState({
  // recipes
  // })
  // }

  fetchUserRecipes = async () => {
    const recipes = await RecipesService.getUserRecipes();
    this.setState({
      recipes,
    });
  };

  // fetchAllMeals = async () => {
  // const meals = await MealsService.getAllMeals()
  // const days = Object.keys(meals)

  // days.forEach( day => {
  // this.setState({
  // meals: {
  // ...this.state.meals,
  // [day]: [...meals[day], ...this.state.meals[day]],
  // }
  // })

  // })

  // console.log(`days`, days)
  // console.log(`meals`, meals[days[0]])
  // }

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

    console.log('days', days);
    console.log('meals', meals[days[0]]);
  };

  // fetchAllUsers = async () => {
  // const users = await UsersService.getAllUsers()
  // this.setState({
  // users
  // })
  // console.log('users', users)
  // }

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

  userLogIn = () => {
    localStorage.setItem('userLoggedIn', true);
  };

  userLogOut = () => {
    localStorage.clear();
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
      userLogIn: this.userLogIn,
      userLogOut: this.userLogOut,
    };

    return (
      <StashContext.Provider value={contextValue}>
        <main className="App">
          <Navigation />
          <Switch>
            <Route exact path="/recipes/" component={RecipesPage} />
            <Route exact path="/recipes/meals" component={MealsPage} />
            <Route exact path="/recipes/new-recipe" component={AddRecipe} />
            <Route exact path="/recipes/edit-recipe/:recipe_id" component={EditRecipe} />
          </Switch>
        </main>
      </StashContext.Provider>
    );
  }
}

export default App;
