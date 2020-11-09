import React from 'react';
import PropTypes from 'prop-types';
import './RecipeItem.css';

function RecipeItem({ id, title, ingredients, instructions, imageURL, handleOpenModal }) {
  return (
    <>
      <li className="RecipeItem" key={id} onClick={handleOpenModal}>
        <div className="item_image">
          <img src={imageURL} alt={title} />
        </div>
        <p>{title}</p>
      </li>
    </>
  );
}

export default RecipeItem;

RecipeItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  imageUrl: PropTypes.string,
  handleOpenModal: PropTypes.func,
};
