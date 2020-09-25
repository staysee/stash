import React from 'react'
import StashContext from '../../../../StashContext'
import DisplayModal from '../../../DisplayModal/DisplayModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBackspace } from '@fortawesome/free-solid-svg-icons';
import './Meals.css'

class Meals extends React.Component {
    static contextType = StashContext;

    state = {
        recipeTitle: 'No Title',
        recipeImageUrl: '',
        showModal: false
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id == recipeId)

        if (recipe) {
            this.setState({
                recipeTitle: recipe.title,
                recipeImageUrl: recipe.image_url
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
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render(){
        const { recipeTitle, recipeImageUrl, showModal } = this.state;
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
            delete: false
        }

        return (
            <div className="Meals">
                {showModal && 
                    <DisplayModal 
                        meal={meal} 
                        customStyles={customStyles} 
                        showModal={showModal}
                        closeModal={this.toggleModal}
                        label="Meal Modal"
                        permissions={permissions}
                    />
                }

                <div className="Meals__info">
                    <div className="info_box left">
                        <div className="Meals__img">
                            <img src={recipeImageUrl} alt="Placeholder" />
                        </div>
                    </div>

                    <div className="info_box middle">
                        <div className="Meals__recipe-title">
                            {recipeTitle}
                        </div>
                    </div>
                    <div className="info_box right">
                        <div className="Meals__options">
                            <FontAwesomeIcon
                                icon={faEye} 
                                onClick={e => {this.setState({showModal: true})}} />
                            <FontAwesomeIcon 
                                icon={faBackspace} 
                                onClick={this.handleClickDelete} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals

