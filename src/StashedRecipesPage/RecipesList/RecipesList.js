import React from 'react'

import './RecipesList.css'

function RecipesList (props) {
    //use array of recipes to make an 'lil' for each recipe
    const recipesList = props.recipes.map( (recipe) =>
        <li className="RecipesList__item" key={recipe.id}>
            <img src={recipe.imageURL} alt={recipe.title} />
            {recipe.title} - {recipe.type}
        </li>        
    )

    return (
        <div className="RecipesList">
            <ul>
                {recipesList}
            </ul>
        </div>
    )
}

export default RecipesList