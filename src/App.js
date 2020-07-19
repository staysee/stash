import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import StashedRecipesPage from './StashedRecipesPage/StashedRecipesPage'
import MealsPage from './MealsPage/MealsPage'
import Navigation from './Navigation/Navigation'
import NotFoundPage from './NotFoundPage'

import './App.css'

function App() {
	return (
		<main className='App'>
			<Link to="/"><h1>STASH</h1></Link>
			<Navigation />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/stashed-recipes' component={StashedRecipesPage} />
				<Route path='/meals' component={MealsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</main>
	);
}

export default App;