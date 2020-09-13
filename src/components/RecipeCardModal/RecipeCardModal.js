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
                    
                    <label className="FormField__label" htmlFor="mealPlanDay">Add to Meal Plan</label>
                    <select 
                        id="meal-plan-day" 
                        className="FormField__select"
                        name="mealPlanDay"
                        value=''
                    >
                        <option value="Select">- Select a Day -</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                    <button onClick={addMealPlan}>Add to Meal Plan</button>
                    <button onClick={toggleModal}>Close</button>
                    
                    <button 
                        type="button"
                        onClick={this.handleClickDelete}>
                        Delete Recipe
                    </button>
                </div>
            </>
        )
    }
}

export default RecipeCardModal