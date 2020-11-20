import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import RecipeCardModal from '../RecipeCardModal/RecipeCardModal';
import StashContext from '../../StashContext';

class DisplayModal extends React.Component {
  static defaultProps = {
    // meal: {},
    showModal: false,
    closeModal: () => {},
    customStyles: {},
    label: '',
    permissions: {
      add: true,
      edit: false,
      delete: false,
    },
  };

  static contextType = StashContext;

  state = {
    recipe: {},
  };

  findRecipe = (recipeId, recipes) => {
    const recipe = recipes.find((rec) => {
      return rec.id == recipeId;
    });

    if (recipe) {
      this.setState({
        recipe,
      });
    }
  };

  componentDidMount() {
    if (this.props.meal) {
      this.findRecipe(this.props.meal.recipe_id, this.context.recipes);
    } else {
      this.findRecipe(this.props.id, this.context.recipes);
    }
  }

  render() {
    const {
      customStyles, label, showModal, closeModal, permissions
    } = this.props;
    const { recipe } = this.state;
    const {
      id, title, ingredients, instructions, meal_type, image_url
    } = recipe;

    return (
      <>
        {recipe && (
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
              imageUrl={image_url}
              addMeal={permissions.add}
              editRecipe={permissions.edit}
              deleteRecipe={permissions.delete}
              closeModal={closeModal}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default DisplayModal;

DisplayModal.propTypes = {
  id: PropTypes.number,
  meal: PropTypes.shape({
    recipe_id: PropTypes.number
  }),
  customStyles: PropTypes.object,
  label: PropTypes.string,
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  permissions: PropTypes.object,
};
