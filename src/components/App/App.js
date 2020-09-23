import React from 'react'
import { Route, Switch } from 'react-router-dom'
import StashContext from '../../StashContext'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import RecipesPage from '../RecipesPage/RecipesPage'
import AddRecipe from '../AddRecipe/AddRecipe'
import MealsPage from '../MealsPage/MealsPage'
import NotFoundPage from '../../NotFoundPage'
import store from '../../store'
import recipesService from '../../service/recipe-service'

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
			// await this.fetchAllMeals(),
			// await this.fetchAllUsers()
		])
		
	}

	fetchAllRecipes = async () => {
		const recipes = await recipesService.getAllRecipes()
		this.context.recipes = recipes
		console.log('context', this.context)
	}

	//fetchAllMeals
	//fetchAllUsers


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
						<Route component={NotFoundPage} />
					</Switch>
				</main>
			</StashContext.Provider>
		);
	}
}

export default App;