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
      title: {
        value: '',
        touched: false,
      },
      ingredients: {
        value: '',
        touched: false,
      },
      instructions: {
        value: '',
        touched: false,
      },
      meal_type: {
        value: '',
        touched: false,
      },
      image_url: {
        value: '',
        touched: false,
      },
    };
  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: {
        value: value,
        touched: true,
      },
    });
  };

  validateTitle = () => {
    const title = this.state.title.value.trim();
    if (!title) {
      return `Recipe title required`;
    }
  };

  validateIngredients = () => {
    const ingredients = this.state.ingredients.value.trim();
    if (!ingredients) {
      return `Ingredients required`;
    }
  };

  validateInstructions = () => {
    const instructions = this.state.instructions.value.trim();

    if (!instructions) {
      return `Instructions required`;
    }
  };

  validateImageURL = () => {
    const image_url = this.state.image_url.value.trim();
    const REGEX_IMAGE_URL = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

    if (!image_url) {
      return `Image URL required`;
    } else if (!image_url.match(REGEX_IMAGE_URL)) {
      return `Image URL must start with http(s) and end with png, jpg, jpeg, gif`;
    }
  };

  validateMealType = () => {
    const meal_type = this.state.meal_type.value.trim();
    if (!meal_type) {
      return `Meal Type required`;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });

    const {
      title: { value: titleVal },
      ingredients: { value: ingredientsVal },
      instructions: { value: instructionsVal },
      meal_type: { value: meal_typeVal },
      image_url: { value: image_urlVal },
    } = this.state;

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
    const {
      image_url: { value: image_urlVal },
    } = this.state;
    const titleError = this.validateTitle();
    const ingredientsError = this.validateIngredients();
    const instructionsError = this.validateInstructions();
    const imageUrlError = this.validateImageURL();
    const mealTypeError = this.validateMealType();

    return (
      <div className="AddRecipe">
        <h2>New Recipe</h2>
        <div className="image-container">
          {image_urlVal && imageUrlError && <img src={image_urlVal} alt="Food Image" />}
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
              value={this.state.title.value}
              onChange={this.handleChange}
            />
            {this.state.title.touched && <ValidationError message={titleError} />}
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
              value={this.state.ingredients.value}
              onChange={this.handleChange}
            />
            {this.state.ingredients.touched && <ValidationError message={ingredientsError} />}
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
              value={this.state.instructions.value}
              onChange={this.handleChange}
            />
            {this.state.instructions.touched && <ValidationError message={instructionsError} />}
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
              value={this.state.image_url.value}
              onChange={this.handleChange}
            />
            {this.state.image_url.touched && <ValidationError message={imageUrlError} />}
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="type">
              Meal Type
            </label>
            <select
              id="type"
              className="FormField__select"
              name="meal_type"
              value={this.state.meal_type.value}
              onChange={this.handleChange}
            >
              <option value="">Select Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
            {this.state.meal_type.touched && <ValidationError message={mealTypeError} />}
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
