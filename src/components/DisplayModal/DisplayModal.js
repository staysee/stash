import React from 'react'
import Modal from 'react-modal'
import RecipeCardModal from '../RecipeCardModal/RecipeCardModal'
import StashContext from '../../StashContext'


class DisplayModal extends React.Component {
    static contextType = StashContext

    state = {
        recipe: {}
    }

    findRecipe = (recipeId, recipes) => {
        const recipe = recipes.find( recipe => recipe.id == recipeId)

        if (recipe) {
            this.setState({
                recipe
            })
        }
    }

    componentDidMount(){
        if(this.props.meal){
            this.findRecipe(this.props.meal.recipe_id, this.context.recipes)
        } else {
            this.findRecipe(this.props.id, this.context.recipes)
        }
    }

    render() {
        const { customStyles, label, showModal, closeModal, permissions } = this.props;
        const { recipe } = this.state;
        const { id, title, ingredients, instructions, meal_type, image_url } = recipe;
        console.log('meal props', this.props.meal)

        return (
            <>
                {recipe && 
                    <Modal
                        isOpen={showModal}
                        onRequestClose={closeModal}
                        contentLabel={label}
                        ariaHideApp={false}
                        style={customStyles}
                    >
                        <RecipeCardModal 
                            id={id}
                            title={title}
                            ingredients={ingredients}
                            instructions={instructions}
                            type={meal_type}
                            imageURL={image_url}
                            editRecipe={permissions.edit}
                            addRecipe={permissions.add}
                            deleteRecipe={permissions.delete}
                            closeModal={this.props.closeModal} />
                    </Modal>}
                }
            </>
            
        )
    }
}

export default DisplayModal