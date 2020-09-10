import React from 'react'
import StashContext from '../../StashContext'

import './RecipeCardModal.css'

class RecipeCardModal extends React.Component {
    static contextType = StashContext;

    handleClickDelete = event => {
        event.preventDefault()

        console.log('deleted recipe', event)

        const recipeId = this.props.id

        console.log(this.props)
        this.context.deleteRecipe(recipeId)
        //return to
        this.props.toggleModal()
        

    }

    render() {
        const { title, ingredients, instructions, type, imageURL, toggleModal, addMealPlan } = this.props
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
                    
                    <button 
                        type="button"
                        onClick={this.handleClickDelete}>
                        Delete
                    </button>
                </div>
            </>
        )
    }
}

export default RecipeCardModal