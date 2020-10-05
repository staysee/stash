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
		meals: {
			"Monday": [],
			"Tuesday": [],
			"Wednesday": [],
			"Thursday": [],
			"Friday": [],
			"Saturday": [],
			"Sunday": []
		}
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
		this.setState({
			recipes
		})
	}

	fetchAllMeals = async () => {
		const meals = await mealsService.getAllMeals()
		const days = Object.keys(meals)

		days.forEach( day => {
			this.setState({
				meals: { 
					...this.state.meals,
					[day]: [...meals[day], ...this.state.meals[day]],
				}
			})

		})

		console.log(`days`, days)
		console.log(`meals`, meals[days[0]])
	}

	fetchAllUsers = async () => {
		const users = await usersService.getAllUsers()
		this.setState({
			users
		})
		console.log('users', users)
	}


	addRecipe = async (recipe) => {
		const newRecipe = [...this.state.recipes, recipe]
		this.setState({
			recipes: newRecipe
		})

		console.log('addRecipe', recipe)
		try {
			const resolve = await recipesService.insertNewRecipe({...recipe, user_id: 1})
			console.log(`resolve`, resolve)
		} catch (error) {
			console.log(`add recipe failed: `,error)
		}
	}

	deleteRecipe = async recipeId => {
		const newRecipes = this.state.recipes.filter( recipe => recipe.id !== recipeId )
		this.setState({
			recipes: newRecipes
		})
		
		try {
			const resolve = await recipesService.deleteRecipe(recipeId)
			console.log(`resolve`, resolve)
		} catch (error) {
			console.log(`delete recipe failed: `, error)
		}
		
	}

	updateRecipe = async updatedRecipe => {
		console.log('update this recipe')
		this.setState({
			recipes: this.state.recipes.map(recipe =>
				(recipe.id !== updatedRecipe.id) ? recipe : updatedRecipe)
		})

		try {
			const resolve = await recipesService.updateRecipe(updatedRecipe)
			console.log(`resolve`, resolve)
		} catch (error) {
			console.log(`update recipe failed: `, error)
		}
	}

	addMeal = async meal => {
		this.setState(prevState => ({
			// copy existing state
			...prevState,
			// update meals key
			meals: {
			// copy existing meals state
			...prevState.meals,
			// update day key & filter meals array by id
				[meal.day]: [...prevState.meals[meal.day], meal]
			}
		}));

		try {
			const resolve = await mealsService.addMeal(meal)
			console.log(`resolve`, resolve)
		} catch (error) {
			console.log(`add meal failed: `, error)
		}
	}

	deleteMeal = async (day, mealId) => {
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

		try {
			const resolve = await mealsService.deleteMeal(day, mealId)
			console.log(`resolve`, resolve)
		} catch (error) {
			console.log(`delete meal failed: `, error)
		}
	}

	render() {
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