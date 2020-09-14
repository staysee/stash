import React from 'react'
import RecipeItem from './RecipeItem/RecipeItem'
import RecipeCardModal from '../../RecipeCardModal/RecipeCardModal'
import Modal from 'react-modal'

import './RecipesList.css'

class RecipesList extends React.Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            currentRecipeId: '',
            currentTitle: '',
            currentIngredients: '',
            currentInstructions: '',
            currentType: '',
            currentImageURL: ''
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

    renderModal = () => {
        const { currentRecipeId, currentTitle, currentIngredients, currentInstructions, currentType, currentImageURL } = this.state;
        return (
            <RecipeCardModal 
                id={currentRecipeId}
                title={currentTitle}
                ingredients={currentIngredients}
                instructions={currentInstructions}
                type={currentType}
                imageURL={currentImageURL}
                toggleModal={this.toggleModal}
                editRecipe={true}
                addRecipe={false}
            />
        )
    }

    render() {
        const { searchTerm, filterType, recipes } = this.props;

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
    
        return (
            <div className="RecipesList">
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.toggleModal}
                    contentLabel="Recipe Modal"
                    ariaHideApp={false}
                    style={customStyles}
                >
                    {this.renderModal()}
                </Modal>
                <ul>
                    {recipesList}
                </ul>
            </div>
        )

    }
}

export default RecipesList