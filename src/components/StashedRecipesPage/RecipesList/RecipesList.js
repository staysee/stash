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
            currentTitle: recipe.title,
            currentIngredients: recipe.ingredients,
            currentInstructions: recipe.instructions,
            currentType: recipe.meal_type,
            currentImageURL: recipe.image_url
        })
    }

    renderModal = () => {
        const { currentTitle, currentIngredients, currentInstructions, currentType, currentImageURL } = this.state;
        return (
            <RecipeCardModal 
                title={currentTitle}
                ingredients={currentIngredients}
                instructions={currentInstructions}
                type={currentType}
                imageURL={currentImageURL}
                toggleModal={this.toggleModal}
            />
        )
    }

    render() {
        const { searchTerm, filterType, recipes } = this.props;

        //use array of recipes to make an 'li' for each recipe
        const recipesList = recipes
        .filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) && (filterType === 'All' || recipe.type === filterType))
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
            content: {
                background: '#9bb9ad'
            }
        }
    
        return (
            <div className="RecipesList">
                <Modal
                    isOpen={this.state.showModal}
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