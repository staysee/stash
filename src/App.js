import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import StashedRecipesPage from './StashedRecipesPage/StashedRecipesPage'
import Navigation from './Navigation/Navigation'
import NotFoundPage from './NotFoundPage'

function App() {
	return (
		<main className='App'>
			<h1>STASH</h1>
			<Navigation />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/stashed-recipes' component={StashedRecipesPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</main>
	);
}

export default App;