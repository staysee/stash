import React from 'react'
import TokenService from '../../services/token-service'
import { Link, NavLink } from 'react-router-dom'
import StashContext from '../../StashContext'
import './Navigation.css'

class Navigation extends React.Component {
    static contextType = StashContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.context.userLogOut()
    }

    renderLoggedInLinks() {
        return (
            <div className='Navigation__logged-in'>
                <NavLink to='/recipes'>Recipes</NavLink>
                <NavLink to='/recipes/meals'>Meals</NavLink>
                <NavLink to='/recipes/new-recipe'>Stash Recipe</NavLink>
                <Link 
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoggedOutLinks() {
        return (
            <div className='Navigation__not-logged-in'>
            </div>
        )
    }

    render() {
        return (
            // <div className="Navigation">
            //     {TokenService.hasAuthToken()
            //     ? this.renderLoggedInLinks()
            //     : this.renderLoggedOutLinks()}
            // </div>
            <div className='Navigation'>
                <NavLink to='/recipes'>Recipes</NavLink>
                <NavLink to='/recipes/meals'>Meals</NavLink>
                <NavLink to='/recipes/new-recipe'>Stash Recipe</NavLink>
                <Link 
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }
}

export default Navigation