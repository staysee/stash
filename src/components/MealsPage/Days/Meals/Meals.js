import React from 'react'
import StashContext from '../../../../StashContext'

import './Meals.css'

class Meals extends React.Component {
    static contextType = StashContext;

    state = {
        recipeTitle: 'No Title'
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id === recipeId)

        console.log(recipe)
        if (recipe) {
            this.setState({
                recipeTitle: recipe.title
            })
        }
    }

    componentDidMount() {
        const { recipes } = this.context
        const { meal } = this.props

        this.findRecipe(meal.recipe_id, recipes)
    }

    handleClickDelete = event => {
        event.preventDefault()
        const mealId = this.props.id
        this.context.deleteMeal(mealId)
    }

    render(){
        const { recipeTitle } = this.state;

        return (
            <div className="Meals">
            
                <div className="Meals__info">
                    <div className="Meals__img">
                        <img src="https://via.placeholder.com/100" alt="Placeholder" />
                    </div>
                    <div className="Meals__recipe-title">
                        {recipeTitle}
                    </div>
                    <div className="Meals__buttons">
                        <button>R</button>
                        <button onClick={this.handleClickDelete}>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals

