import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import StashContext from '../../StashContext';
import './AddRecipe.css';

class AddRecipe extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = StashContext;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: '',
      meal_type: '',
      image_url: '',
    };
  }

  validateTitle = () => {
    const { title } = this.state;

    if (!title) {
      return `Missing Recipe Title`;
    }
  };

  validateIngredients = () => {
    const { ingredients } = this.state;

    if (!ingredients) {
      return `Missing Ingredients`;
    }
  };

  validateInstructions = () => {
    const { instructions } = this.state;

    if (!instructions) {
      return `Missing Recipe Instructions`;
    }
  };

  validateImageURL = () => {
    const { image_url } = this.state;
    const REGEX_IMAGE_URL = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

    if (!image_url) {
      return `Missing Image URL`;
    } else if (!image_url.match(REGEX_IMAGE_URL)) {
      return `Image URL must end with png, jpg, jpeg, gif`;
    }
  };

  validateMealType = () => {
    const { meal_type } = this.state;

    if (!meal_type) {
      return `Missing Meal Type`;
    }
  };

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, ingredients, instructions, meal_type, image_url } = this.state;
    const newRecipe = {
      title,
      ingredients,
      instructions,
      meal_type,
      image_url,
    };
    console.log(`The new recipe:`, newRecipe);

    this.context.addRecipe(newRecipe);
    //return to
    this.props.history.push(`/recipes`);
  };

  handleClickCancel = () => {
    this.props.history.push('/recipes');
  };

  render() {
    const { image_url } = this.state;

    return (
      <div className="AddRecipe">
        <h2>New Recipe</h2>
        <div className="image-container">
          {image_url && <img src={image_url} alt="Food Image" />}
        </div>
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__label" htmlFor="title">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              className="FormField__input"
              placeholder="Enter Recipe Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="ingredients">
              Ingredients
            </label>
            <input
              type="text"
              id="ingredients"
              className="FormField__input"
              placeholder="Recipe Ingredients"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__label" htmlFor="instructions">
              Instructions
            </label>
            <input
              type="text"
              id="instructions"
              className="FormField__input"
              placeholder="Recipe Instructions"
              name="instructions"
              value={this.state.instructions}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__label" htmlFor="imageURL">
              Image URL
            </label>
            <input
              id="imageURL"
              type="url"
              className="FormField__input"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="type">
              Meal Type
            </label>
            <select
              id="type"
              className="FormField__select"
              name="meal_type"
              value={this.state.meal_type}
              onChange={this.handleChange}
            >
              <option value="">Select Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>

          {this.state.error && <ValidationError message={this.state.error} />}

          <button
            type="submit"
            disabled={
              this.validateTitle() ||
              this.validateIngredients() ||
              this.validateInstructions() ||
              this.validateImageURL() ||
              this.validateMealType()
            }
          >
            Stash My Recipe
          </button>
          <button onClick={this.handleClickCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;

AddRecipe.propTypes = {
  history: PropTypes.object,
};
