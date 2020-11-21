import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import StashContext from '../../StashContext';
import './RecipeCardModal.css';

class RecipeCardModal extends React.Component {
  static defaultProps = {
    imageUrl: '',
    closeModal: () => {},
  };

  static contextType = StashContext;

  constructor(props) {
    super(props);
    this.state = {
      day: '',
      recipe_id: '',
      message: '',
    };
  }

  handleClickDelete = (event, recipeId) => {
    event.preventDefault();
    this.context.deleteRecipe(recipeId);
    console.log('recipeId', recipeId);
    // return to
    this.props.closeModal();
  };

  handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      recipe_id: this.props.id,
      [name]: value,
      message: '',
    });
  };

  resetFields = () => {
    this.setState({
      day: '',
    });
  };

  // temporary to generate meal Id
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  validateMealDay = () => {
    const { day } = this.state;
    if (day === null || day === '') {
      return 'Day required to add to meal.';
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { day } = this.state;

    const newMeal = {
      day,
      recipe_id: this.props.id,
    };
    this.setState({
      message: `Meal added to ${newMeal.day}`,
    });
    this.context.addMeal(newMeal);
    this.resetFields();
    this.props.closeModal();
  };

  render() {
    const {
      id,
      title,
      ingredients,
      instructions,
      type,
      imageUrl,
      addMeal = true,
      editRecipe = true,
      deleteRecipe = true,
    } = this.props;
    const { message } = this.state;

    return (
      <>
        <div className="RecipeCardModal">
          <div className="recipe-information">
            <h2>{title}</h2>
            <div className="recipe-image">
              <img src={imageUrl} alt={title} />
            </div>
            <div className="info-container">
              <div className="ingredients">
                <p className="label">Ingredients</p>
                <p>{ingredients}</p>
              </div>
              <div className="instructions">
                <p className="label">Instructions</p>
                <p>{instructions}</p>
              </div>
              <div className="meal-type">
                <p className="label">Meal Type</p>
                <p>{type}</p>
              </div>
            </div>
          </div>

          {addMeal && (
            <form className="FormFields recipeOptions" onSubmit={this.handleSubmit}>
              {message}
              <label className="FormField__label" htmlFor="mealPlanDay">
                Add to Meal Plan
                <select
                  id="mealPlanDay"
                  className="FormField__select"
                  name="day"
                  value={this.state.day}
                  onChange={this.handleChange}
                >
                  <option value="null">- Select a Day -</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </label>

              <button type="submit" disabled={this.validateMealDay()}>
                Add This Meal
              </button>
            </form>
          )}

          <div className="edit-delete">
            {editRecipe && (
              <Link className="edit-recipe" to={`/recipes/edit-recipe/${id}`}>
                <FontAwesomeIcon icon={faEdit} />
                {' '}
                Edit
              </Link>
            )}

            {deleteRecipe && (
              <button
                type="button"
                className="delete-recipe"
                onClick={(e) => this.handleClickDelete(e, id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
                {' '}
                Delete
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeCardModal;

RecipeCardModal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.oneOf(['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']),
  addMeal: PropTypes.bool,
  editRecipe: PropTypes.bool,
  deleteRecipe: PropTypes.bool,
};
