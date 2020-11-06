import React from 'react'
import RecipeItem from './RecipeItem/RecipeItem'
import DisplayModal from '../../DisplayModal/DisplayModal'
import PropTypes from 'prop-types'
import './RecipesList.css'

class RecipesList extends React.Component{
    static defaultProps ={
        searchTerm: '', 
        filterType: 'All',
        recipes: []
    }
    constructor(){
        super()
        this.state = {
            showModal: false,
            currentRecipeId: '',
            currentTitle: '',
            currentIngredients: '',
            currentInstructions: '',
            currentType: '',
            currentImageURL: '',
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleOpenModal = (recipe) => {
        this.setState({
            showModal: true,
            currentRecipeId: recipe.id,
            currentTitle: recipe.title,
            currentIngredients: recipe.ingredients,
            currentInstructions: recipe.instructions,
            currentType: recipe.meal_type,
            currentImageURL: recipe.image_url
        })
    }

    render() {
        const { showModal, currentRecipeId, currentTitle, currentIngredients, currentInstructions, currentType, currentImageURL } = this.state;
        const { searchTerm, filterType, recipes } = this.props;
        // console.log(`THIS`, recipes)
        //use array of recipes to make an 'li' for each recipe
        const recipesList = recipes
        .filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) && (filterType === 'All' || recipe.meal_type === filterType))
        .map( (recipe, key) =>
            <RecipeItem 
                key={key} 
                imageURL={recipe.image_url} 
                title={recipe.title} 
                type={recipe.meal_type}
                handleOpenModal={ () => this.handleOpenModal(recipe)} 
            />
        )

        const customStyles = {
            overlay: {
                background: '#4c645682'
            },
            content: {
                background: 'rgb(240 240 240)'
            }
        }

        const permissions = {
            edit: true,
            add: true,
            delete: true
        }
    
        return (
            <div className="RecipesList">
                {showModal && 
                    <DisplayModal 
                        id={currentRecipeId}
                        title={currentTitle}
                        ingredients={currentIngredients}
                        instructions={currentInstructions}
                        type={currentType}
                        imageURL={currentImageURL}
                        editRecipe={true}
                        addMeal={true}
                        customStyles={customStyles} 
                        showModal={showModal}
                        closeModal={this.toggleModal}
                        label="Recipe Modal"
                        permissions={permissions}
                    />
                }
                <ul>
                    {recipesList}
                </ul>
            </div>
        )

    }
}

export default RecipesList

RecipesList.propTypes = {
    searchTerm: PropTypes.string , 
    filterType: PropTypes.oneOf(['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']),
    recipes: PropTypes.array
}