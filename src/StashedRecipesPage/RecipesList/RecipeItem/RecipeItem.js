import React from 'react'

import './RecipeItem.css'

function RecipeItem({id, title, ingredients, instructions, imageURL, handleOpenModal}){
    return (
        <>
            <li 
                className="RecipeItem" 
                key={id}
                onClick={handleOpenModal}
            >
                <img src={imageURL} alt={title} />
                <p>{title}</p>
            </li>
        </>   
    )
}

export default RecipeItem