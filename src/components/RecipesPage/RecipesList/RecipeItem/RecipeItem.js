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
                <div className="item_image">
                    <img src={imageURL} alt={title} />
                </div>
                <p>{title}</p>
            </li>
        </>   
    )
}

export default RecipeItem