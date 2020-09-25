import React from 'react'
import StashContext from '../../StashContext'

import './EditRecipe.css'

class EditRecipe extends React.Component {
    static contextType = StashContext;

    state = {
        id: '',
        title: '',
        instructions: '',
        ingredients: '',
        meal_type: '',
        image_url: ''
    }
    
    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id == recipeId)
        console.log(recipe) 
    }

    componentDidMount() {
        const { recipe_id } = this.props.match.params;
        this.findRecipe(recipe_id, this.context.recipes)
        // console.log(recipe_id)
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id == recipeId)

        if (recipe) {
            this.setState({
                id: recipe.id,
                title: recipe.title,
                instructions: recipe.instructions,
                ingredients: recipe.ingredients,
                meal_type: recipe.meal_type,
                image_url: recipe.image_url
            })
        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { id, title, ingredients, instructions, meal_type, image_url } = this.state
        const newRecipe = {
            id,
            title,
            ingredients,
            instructions,
            meal_type,
            image_url
        }
        console.log(`The new recipe:`, newRecipe);

        this.context.updateRecipe(newRecipe)
        // return to
        // this.props.history.push(`/recipes`)
    }

    render() {
        const { id, title, ingredients, instructions, meal_type, image_url } = this.state
        
        return(
            <div className="EditRecipe">

                    <h2>Edit Recipe</h2>
                    <div className="image-container">
                        <div className="edit-image">
                            <img src={image_url} alt="Recipe Pic" />
                        </div>
                    </div>
                    <form className="FormFields" onSubmit={this.handleSubmit}>
    
                        <div className="FormField">
                            <label className="FormField__label" htmlFor="title">Recipe Title</label>
                            <input 
                                type="text" 
                                id="title" 
                                className="FormField__input" 
                                placeholder="Enter Recipe Title" 
                                name="title" 
                                value={title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="FormField">
                            <label className="FormField__label" htmlFor="ingredients">Ingredients</label>
                            <input 
                                type="text" 
                                id="ingredients" 
                                className="FormField__input" 
                                placeholder="Recipe Ingredients" 
                                name="ingredients" 
                                value={ingredients}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="FormField">
                            <label className="FormField__label" htmlFor="instructions">Instructions</label>
                            <input 
                                type="text" 
                                id="instructions" 
                                className="FormField__input" 
                                placeholder="Recipe Instructions" 
                                name="instructions" 
                                value={instructions}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="FormField">
                            <label className="FormField__label" htmlFor="imageURL">Image URL</label>
                            <input 
                                id="imageURL" 
                                type="url" 
                                className="FormField__input" 
                                placeholder="https://example.com"
                                pattern="https://.*" 
                                size="30"
                                name="image_url" 
                                value={image_url}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="FormField">
                            <label className="FormField__label" htmlFor="type">Meal Type</label>
                            <select 
                                id="type" 
                                className="FormField__select"
                                name="meal_type"
                                value={meal_type}
                                onChange={this.handleChange}
                                >
                                <option value="">Select Type</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                            </select>
                        </div>
                    
                    <button type="submit">Stash My Recipe</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
}

export default EditRecipe