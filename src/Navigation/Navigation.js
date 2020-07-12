import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
    return (
        <div className="Navigation">
            <NavLink to='/stashed-recipes'>Stashed Recipes</NavLink>
            <NavLink to='/meals'>Meals</NavLink>
        </div>
    )
}

export default Navigation