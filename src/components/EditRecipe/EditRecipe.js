import React from 'react';
import PropTypes from 'prop-types';
import StashContext from '../../StashContext';
import './EditRecipe.css';

class EditRecipe extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
    history: {
      push: () => {},
    },
  };

  static contextType = StashContext;

  state = {
    id: '',
    title: '',
    instructions: '',
    ingredients: '',
    meal_type: '',
    image_url: '',
  };

  findRecipe = (recipeId, recipes) => {
    const recipe = recipes.find((r) => r.id == recipeId);

    if (recipe) {
      this.setState({
        id: recipe.id,
        title: recipe.title,
        instructions: recipe.instructions,
        ingredients: recipe.ingredients,
        meal_type: recipe.meal_type,
        image_url: recipe.image_url,
      });
    }
  };

  componentDidMount() {
    const { recipe_id } = this.props.match.params;
    this.findRecipe(recipe_id, this.context.recipes);
  }

  handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      id, title, ingredients, instructions, meal_type, image_url
    } = this.state;
    const newRecipe = {
      id,
      title,
      ingredients,
      instructions,
      meal_type,
      image_url,
    };
    console.log('The new recipe:', newRecipe);

    this.context.updateRecipe(newRecipe);
    // return to
    this.props.history.push('/recipes');
  };

  render() {
    const {
      title, ingredients, instructions, meal_type, image_url
    } = this.state;

    return (
      <div className="EditRecipe">
        <h2>Edit Recipe</h2>
        <div className="image-container">
          <div className="edit-image">
            <img src={image_url} alt="Recipe Pic" />
          </div>
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
                value={title}
                onChange={this.handleChange}
              />
            </label>
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
                value={ingredients}
                onChange={this.handleChange}
              />
            </label>
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
                value={instructions}
                onChange={this.handleChange}
              />
            </label>
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
                value={image_url}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="FormField">
            <label className="FormField__label" htmlFor="type">
              Meal Type
              <select
                id="type"
                className="FormField__select"
                name="meal_type"
                value={meal_type}
                onChange={this.handleChange}
              >
                <option value="">Select Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </label>
          </div>

          <div className="button-container">
            <button className="add-new" type="submit">Stash My Recipe</button>
            <button className="cancel-new" type="button">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditRecipe;

EditRecipe.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
