import React from 'react'
import { Route, Switch } from 'react-router-dom'
import StashContext from '../../StashContext'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import RecipesPage from '../RecipesPage/RecipesPage'
import AddRecipe from '../AddRecipe/AddRecipe'
import EditRecipe from '../EditRecipe/EditRecipe'
import MealsPage from '../MealsPage/MealsPage'
import NotFoundPage from '../../NotFoundPage'
import store from '../../store'

import './App.css'

class App extends React.Component {
	state = {
		recipes: store.recipes,
		meals: store.meals
	}

	addRecipe = recipe => {
		const newRecipe = [...this.state.recipes, recipe]
		this.setState({
			recipes: newRecipe
		})
	}

	deleteRecipe = recipeId => {
		const newRecipes = this.state.recipes.filter( recipe => recipe.id !== recipeId )
		this.setState({
			recipes: newRecipes
		})
		
	}

	updateRecipe = updatedRecipe => {
		console.log('update this recipe')
		this.setState({
			recipes: this.state.recipes.map(recipe =>
				(recipe.id !== updatedRecipe.id) ? recipe : updatedRecipe)
		})
	}

	addMeal = meal => {
		const newMeal = [...this.state.meals, meal]
		this.setState({
			meals: newMeal
		})
		console.log('meal was added')
	}

	// deleteMeal = (day, mealId, recipeId) => {
	// 	const currentDayMeals = this.state.meals[day]
	// 		.filter( meal => meal.id !== mealId && meal.recipe_id !== recipeId )

	// 	this.setState({
	// 		meals: {...this.state.meals, "Monday": currentDayMeals}
	// 	})
	// 	console.log('current', currentDayMeals)
	// 	console.log('deleted this meal', mealId)
	// }

	deleteMeal = (day, mealId) => {
		this.setState(prevState => ({
			// copy existing state
			...prevState,
			// update meals key
			meals: {
			// copy existing meals state
			...prevState.meals,
			// update day key & filter meals array by id
			[day]: prevState.meals[day].filter( ({ id }) => id !== mealId) ,
			},
		}));
	}

	render() {
		// Change state to context value
		const contextValue = {
			recipes: this.state.recipes,
			meals: this.state.meals,
			addRecipe: this.addRecipe,
			deleteRecipe: this.deleteRecipe,
			updateRecipe: this.updateRecipe,
			addMeal: this.addMeal,
			deleteMeal: this.deleteMeal
		}

		return (
			<StashContext.Provider value={contextValue}>
				<main className='App'>
					<Logo />
					<Navigation />
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/login' component={LoginPage} />
						<Route path='/recipes' component={RecipesPage} />
						<Route path='/meals' component={MealsPage} />
						<Route path='/new-recipe' component={AddRecipe} />
						<Route path='/edit-recipe/:recipe_id' component={EditRecipe} />
						<Route component={NotFoundPage} />
					</Switch>
				</main>
			</StashContext.Provider>
		);
	}
}

export default App;