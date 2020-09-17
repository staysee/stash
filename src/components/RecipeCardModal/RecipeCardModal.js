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
        this.props.closeModal()
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

    //temporary to generate meal Id
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleSubmit = e => {
        e.preventDefault();
        const { day, recipe_id } = this.state;
        
        const newMeal = {
            id: this.getRandomInt(1, 500),
            day,
            recipe_id
        }

        this.context.addMeal(newMeal)
    }



    render() {
        const { title, ingredients, instructions, type, imageURL, editRecipe=true, deleteRecipe=true } = this.props
        return(
            <>
                <div className="RecipeCardModal">
                    <div className="recipe-information">
                        <h2>{title}</h2>
                        <div className="recipe-image">
                            <img src={imageURL} alt={title} />
                        </div>
                        <div className="ingredients">
                            <p className="label">Ingredients</p>
                            <p>{ingredients}</p>
                        </div>
                        <div className="instructions">
                            <p className="label">Instructions</p>
                            <p>{instructions}</p>
                        </div>
                        <div className="meal-type">
                            <p className="label">Meal Type</p>
                            <p>{type}</p>
                        </div>
                    </div>
                    
                    {editRecipe && (<form className="FormFields recipeOptions" onSubmit={this.handleSubmit}>
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

                        <button type="submit" className="add-meal">Add This Meal</button>
                    </form>)}
                    
                    {deleteRecipe &&
                        <button 
                            type="button"
                            className="delete-recipe"
                            onClick={this.handleClickDelete}>
                            Delete Recipe
                        </button>
                    }
                    
                </div>
            </>
        )
    }
}

export default RecipeCardModal