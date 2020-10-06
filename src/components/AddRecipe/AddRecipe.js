import React from 'react'
import StashContext from '../../StashContext'
import PropTypes from 'prop-types'

class AddRecipe extends React.Component {
    static contextType = StashContext

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            ingredients: '',
            instructions: '',
            meal_type: '',
            image_url: ''
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

        const { title, ingredients, instructions, meal_type, image_url } = this.state

        const newRecipe = {
            title,
            ingredients,
            instructions,
            meal_type,
            image_url
        }
        console.log(`The new recipe:`, newRecipe);

        this.context.addRecipe(newRecipe)
        //return to
        this.props.history.push(`/recipes`)
    }


    handleClickCancel = () => {
        this.props.history.push('/recipes')
    }

    render() {
        return(
            <div className="AddRecipe">

                    <h2>New Recipe</h2>
                    <div className="image-container">
                        <img src="https://via.placeholder.com/100" alt="Recipe Pic" />
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
                                value={this.state.title}
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
                                value={this.state.ingredients}
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
                                value={this.state.instructions}
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
                                value={this.state.image_url}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="FormField">
                            <label className="FormField__label" htmlFor="type">Meal Type</label>
                            <select 
                                id="type" 
                                className="FormField__select"
                                name="meal_type"
                                value={this.state.meal_type}
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
                    <button onClick={this.handleClickCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default AddRecipe

AddRecipe.propTypes = {
    history: PropTypes.object
}