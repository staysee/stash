import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import StashContext from '../../StashContext'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import StashedRecipesPage from '../StashedRecipesPage/StashedRecipesPage'
import MealsPage from '../MealsPage/MealsPage'
import Navigation from '../Navigation/Navigation'
import AddRecipe from '../AddRecipe/AddRecipe'
import NotFoundPage from '../../NotFoundPage'
import store from '../../store'

import './App.css'

class App extends React.Component {
	state = {
		recipes: [],
		meals: []
	}

	componentDidMount(){
		this.setState(store)
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

	addMeal = meal => {
		const newMeal = [...this.state.meals, meal]
		this.setState({
			meals: newMeal
		})
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
					<Link to="/"><h1>STASH</h1></Link>
					<Navigation />
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/login' component={LoginPage} />
						<Route path='/stashed-recipes' component={StashedRecipesPage} />
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