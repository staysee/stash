import React from 'react';

const StashContext = React.createContext({
  loading: false,
  setLoading: () => {},
  recipes: [],
  meals: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
  addMeal: () => {},
  deleteMeal: () => {},
  userLogOut: () => {},
});

export default StashContext;
