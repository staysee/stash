import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError/ValidationError';
import StashContext from '../../StashContext';
import Citrus from '../../assets/bruna-branco-7r1HxvVC7AY-unsplash.jpg';
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
    const { target } = e;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: {
        value,
        touched: true,
      },
    });
  };

  validateTitle = () => {
    const title = this.state.title.value.trim();
    if (!title) {
      return 'Recipe title required';
    } if (title.length > 30) {
      return 'Recipe title cannot be greater than 30 characters';
    } if (title.length < 3) {
      return 'Recipe title must be greater than 3 characters';
    }
  };

  validateIngredients = () => {
    const ingredients = this.state.ingredients.value.trim();
    if (!ingredients) {
      return 'Ingredients required';
    } if (ingredients.length < 3) {
      return 'Ingredients must be greater than 3 characters';
    }
  };

  validateInstructions = () => {
    const instructions = this.state.instructions.value.trim();

    if (!instructions) {
      return 'Instructions required';
    } if (instructions.length < 10) {
      return 'Instructtions must be greater than 10 characters';
    } if (instructions.length > 1000) {
      return 'Instructions cannot exceed 1000 characters';
    }
  };

  validateImageUrl = () => {
    const image_url = this.state.image_url.value.trim();
    const REGEX_IMAGE_URL = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;

    if (!image_url) {
      return 'Image URL required';
    } if (!image_url.match(REGEX_IMAGE_URL)) {
      return 'Image URL must start with http(s) and end with png, jpg, jpeg, gif';
    }
  };

  validateMealType = () => {
    const meal_type = this.state.meal_type.value.trim();
    if (!meal_type) {
      return 'Meal Type required';
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    this.context.setLoading(true);

    const {
      title: { value: titleVal },
      ingredients: { value: ingredientsVal },
      instructions: { value: instructionsVal },
      meal_type: { value: meal_typeVal },
      image_url: { value: image_urlVal },
    } = this.state;

    const newRecipe = {
      title: titleVal,
      ingredients: ingredientsVal,
      instructions: instructionsVal,
      meal_type: meal_typeVal,
      image_url: image_urlVal,
    };
    console.log('The new recipe:', newRecipe);

    this.context.addRecipe(newRecipe);
    this.context.setLoading(false);
    // return to
    this.props.history.push('/recipes');
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
    const imageUrlError = this.validateImageUrl();
    const mealTypeError = this.validateMealType();

    return (
      <div className="AddRecipe">
        <h2>New Recipe</h2>
        <div className="image-container">
          {image_urlVal && !imageUrlError
            ? (
              <img src={image_urlVal} className="new-recipe-image" alt="Food" />
            )
            : (
              <img
                src={Citrus}
                className="placeholder-recipe-image"
                alt="citrus" />
            )}
        </div>
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__label" htmlFor="title">
              Recipe Title
              <input
                type="text"
                id="title"
                className="FormField__input"
                placeholder="Enter Recipe Title"
                name="title"
                value={this.state.title.value}
                onChange={this.handleChange}
              />
            </label>
            {this.state.title.touched && <ValidationError message={titleError} />}
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="ingredients">
              Ingredients
              <input
                type="text"
                id="ingredients"
                className="FormField__input"
                placeholder="Recipe Ingredients"
                name="ingredients"
                value={this.state.ingredients.value}
                onChange={this.handleChange}
              />
            </label>
            {this.state.ingredients.touched && <ValidationError message={ingredientsError} />}
          </div>

          <div className="FormField">
            <label className="FormField__label" htmlFor="instructions">
              Instructions
              <input
                type="text"
                id="instructions"
                className="FormField__input"
                placeholder="Recipe Instructions"
                name="instructions"
                value={this.state.instructions.value}
                onChange={this.handleChange}
              />
            </label>
            {this.state.instructions.touched && <ValidationError message={instructionsError} />}
          </div>

          <div className="FormField">
            <label className="FormField__label" htmlFor="imageUrl">
              Image URL
              <input
                id="imageUrl"
                type="url"
                className="FormField__input"
                placeholder="https://example.com"
                pattern="https://.*"
                size="30"
                name="image_url"
                value={this.state.image_url.value}
                onChange={this.handleChange}
              />
            </label>
            {this.state.image_url.touched && <ValidationError message={imageUrlError} />}
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="type">
              Meal Type
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
            </label>
            {this.state.meal_type.touched && <ValidationError message={mealTypeError} />}
          </div>

          {this.state.error && <ValidationError message={this.state.error} />}

          {this.context.loading && (
            <Loader
              className="loader-dots"
              type="ThreeDots"
              color="#FF917A"
              height={20}
              width={20}
            />
          )}

          <div className="button-container">
            <button
              type="submit"
              className="add-new"
              disabled={
                this.validateTitle()
                || this.validateIngredients()
                || this.validateInstructions()
                || this.validateImageUrl()
                || this.validateMealType()
              }
            >
              Stash My Recipe
            </button>
            <button
              type="submit"
              className="cancel-new"
              onClick={this.handleClickCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipe;

AddRecipe.propTypes = {
  history: PropTypes.object,
};
