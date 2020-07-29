import React from 'react'

import './RecipesList.css'

class RecipesList extends React.Component{
    render() {
        const { searchTerm, filterType, recipes } = this.props;

        //use array of recipes to make an 'lil' for each recipe
        const recipesList = recipes
        .filter(recipe => recipe.title.includes(searchTerm) && (filterType === 'All' || recipe.type === filterType))
        .map( (recipe, key) =>
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
}

export default RecipesList