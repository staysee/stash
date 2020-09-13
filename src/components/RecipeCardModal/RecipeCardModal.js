import React from 'react'
import StashContext from '../../StashContext'

import './RecipeCardModal.css'

class RecipeCardModal extends React.Component {
    static contextType = StashContext;

    constructor(props) {
        super(props)
        this.state = {
            day: '',
            recipe_id: ''
        }
    }

    handleClickDelete = event => {
        event.preventDefault()
        const recipeId = this.props.id
        this.context.deleteRecipe(recipeId)
        //return to
        this.props.toggleModal()
    }

    handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            recipe_id: this.props.id,
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { day, recipe_id } = this.state;

        const newMeal = {
            day,
            recipe_id
        }

        this.context.addMeal(newMeal)
        // this.props.toggleModal()
    }



    render() {
        const { title, ingredients, instructions, type, imageURL, toggleModal } = this.props
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
                    
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        <label className="FormField__label" htmlFor="mealPlanDay">Add to Meal Plan</label>
                        <select 
                            id="mealPlanDay" 
                            className="FormField__select"
                            name="day"
                            value={this.state.day}
                            onChange={this.handleChange}
                        >
                            <option value="null">- Select a Day -</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>

                        <button type="submit">Add This Meal</button>
                    </form>

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