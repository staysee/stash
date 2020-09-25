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
import recipesService from '../../service/recipe-service'
import mealsService from '../../service/meal-service'
import usersService from '../../service/user-service'

import './App.css'

class App extends React.Component {
	static contextType = StashContext

	state = {
		recipes: [],
		meals: []
	}

	async componentDidMount(){
		// this.setState(store)
		await Promise.all([
			await this.fetchAllRecipes(),
			await this.fetchAllMeals(),
			await this.fetchAllUsers()
		])
		
	}

	fetchAllRecipes = async () => {
		const recipes = await recipesService.getAllRecipes()
		this.context.recipes = recipes
		console.log('context', this.context)
	}

	fetchAllMeals = async () => {
		const meals = await mealsService.getAllMeals()
		this.context.meals = meals
		console.log('context', this.context)
	}

	fetchAllUsers = async () => {
		const users = await usersService.getAllUsers()
		this.context.users = users
		console.log('context', this.context)
	}


	addRecipe = async (recipe) => {
		const newRecipe = [...this.state.recipes, recipe]
		this.setState({
			recipes: newRecipe
		})

		console.log('addRecipe', recipe)
		const resolve = await recipesService.insertNewRecipe({...recipe, user_id: 1})
		console.log('resolve', resolve)
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

	deleteMeal = mealId => {
		const newMeals = this.state.meals.filter( meal => meal.id !== mealId )
		this.setState({
			meals: newMeals
		})
		
		console.log('deleted this meal', mealId)
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