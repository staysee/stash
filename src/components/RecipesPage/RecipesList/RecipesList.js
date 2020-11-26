import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem/RecipeItem';
import DisplayModal from '../../DisplayModal/DisplayModal';
import './RecipesList.css';

class RecipesList extends React.Component {
  static defaultProps = {
    searchTerm: '',
    filterType: 'All',
    recipes: [],
  };

  constructor() {
    super();
    this.state = {
      showModal: false,
      currentRecipeId: '',
      currentTitle: '',
      currentIngredients: '',
      currentInstructions: '',
      currentType: '',
      currentImageUrl: '',
    };
  }

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  };

  handleOpenModal = (recipe) => {
    this.setState({
      showModal: true,
      currentRecipeId: recipe.id,
      currentTitle: recipe.title,
      currentIngredients: recipe.ingredients,
      currentInstructions: recipe.instructions,
      currentType: recipe.meal_type,
      currentImageUrl: recipe.image_url,
    });
  };

  render() {
    const { searchTerm, filterType, recipes } = this.props;
    const {
      showModal,
      currentRecipeId,
      currentTitle,
      currentIngredients,
      currentInstructions,
      currentType,
      currentImageUrl,
    } = this.state;

    const recipesList = recipes
      .filter(
        (recipe) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          && (filterType === 'All' || recipe.meal_type === filterType)
      )
      .map((recipe, key) => (
        <RecipeItem
          key={key}
          imageUrl={recipe.image_url}
          title={recipe.title}
          type={recipe.meal_type}
          handleOpenModal={() => this.handleOpenModal(recipe)}
        />
      ));

    const customStyles = {
      overlay: {
        background: '#4c645682',
      },
      content: {
        background: 'rgb(240 240 240)',
      },
    };

    const permissions = {
      edit: true,
      add: true,
      delete: true,
    };

    return (
      <div className="RecipesList">
        {showModal && (
          <DisplayModal
            id={currentRecipeId}
            title={currentTitle}
            ingredients={currentIngredients}
            instructions={currentInstructions}
            type={currentType}
            imageUrl={currentImageUrl}
            editRecipe
            addMeal
            customStyles={customStyles}
            showModal={showModal}
            closeModal={this.toggleModal}
            label="Recipe Modal"
            permissions={permissions}
          />
        )}
        <ul className="recipes-container">{recipesList}</ul>
      </div>
    );
  }
}

export default RecipesList;

RecipesList.propTypes = {
  searchTerm: PropTypes.string,
  filterType: PropTypes.oneOf(['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']),
  recipes: PropTypes.array,
};
