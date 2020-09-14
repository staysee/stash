import React from 'react'
import StashContext from '../../../../StashContext'

import './Meals.css'
import DisplayModal from '../../../DisplayModal/DisplayModal';

class Meals extends React.Component {
    static contextType = StashContext;

    state = {
        recipeTitle: 'No Title',
        showModal: false
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id == recipeId)

        console.log(recipe)
        console.log(recipeId)
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
        const mealId = this.props.meal.id
        this.context.deleteMeal(mealId)
        console.log('props', this.props)
    }

    handleOpenModal = meal => {
        
    }

    render(){
        const { recipeTitle, showModal } = this.state;
        const { meal } = this.props;

        const customStyles = {
            overlay: {
                background: '#4c645682'
            },
            content: {
                background: 'rgb(240 240 240)'
            }
        }

        const permissions = {
            edit: false,
            add: false,
            delete: true
        }

        return (
            <div className="Meals">
                {showModal && 
                    <DisplayModal 
                        meal={meal} 
                        customStyles={customStyles} 
                        showModal={showModal} 
                        label="Meal Modal"
                        permissions={permissions}
                    />
                }

                <div className="Meals__info">
                    <div className="Meals__img">
                        <img src="https://picsum.photos/100" alt="Placeholder" />
                    </div>
                    <div className="Meals__recipe-title">
                        {recipeTitle}
                    </div>
                    <div className="Meals__buttons">
                        <button onClick={e => {this.setState({showModal: true})}}>R</button>
                        <button onClick={this.handleClickDelete}>X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals

