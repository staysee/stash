import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navigation.css'
import TokenService from '../../services/token-service'

class Navigation extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLoggedInLinks() {
        return (
            <div className='Navigation__logged-in'>
                <NavLink to='/recipes'>Recipes</NavLink>
                <NavLink to='/meals'>Meals</NavLink>
                <NavLink to='/new-recipe'>Stash Recipe</NavLink>
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
            <div className="Navigation">
                {TokenService.hasAuthToken()
                ? this.renderLoggedInLinks()
                : this.renderLoggedOutLinks()}
            </div>
        )
    }
}

export default Navigation