import React from 'react'
import StashContext from '../../../StashContext'

import './Meals.css'

class Meals extends React.Component {
    static contextType = StashContext;

    state = {
        recipeTitle: 'No Title'
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id === recipeId)

        if (recipe) {
            this.setState({
                recipeTitle: recipe.title
            })
        }
    }

    componentDidMount() {
        const { recipes } = this.context
        const { meal } = this.props

        this.findRecipe(meal.recipeId, recipes)
    }

    render(){
        const { type } = this.props;
        const { recipeTitle } = this.state;

        return (
            <div className="Meals">
                <div className="Meals__type">{type}</div>
                
                <div className="Meals__info">
                    <div className="Meals__img">
                        <img src="https://via.placeholder.com/100" alt="Placeholder" />
                    </div>
                    <div className="Meals__recipe-title">
                        {recipeTitle}
                    </div>
                    <div className="Meals__buttons">
                        <button>R</button>
                        <button>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals

