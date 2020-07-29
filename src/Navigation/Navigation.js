import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation () {
    return (
        <div className="Navigation">
            <NavLink to='/stashed-recipes'>Stashed Recipes</NavLink>
            <NavLink to='/meals'>Meals</NavLink>
            <NavLink to='/new-recipe'>Stash New Recipe</NavLink>
        </div>
    )
}

export default Navigation