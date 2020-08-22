import React from 'react'

import './RecipeCardModal.css'

function RecipeCardModal({ title, ingredients, instructions, type, imageURL, toggleModal, addMealPlan }) {

    return(
        <>
            <div className="RecipeCardModal">
                <div className="recipe-image">
                    <img src={imageURL} alt={title} />
                </div>

                <h2>{title}</h2>
                <p><span>Ingredients: </span>{ingredients}</p>
                <p><span>Instructions: </span>{instructions}</p>
                <p><span>Meal Type: </span>{type}</p>
                <button onClick={toggleModal}>Close</button>
                <button onClick={addMealPlan}>Add to Meal Plan</button>
            </div>
        </>
    )
}

export default RecipeCardModal