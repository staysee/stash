import React from 'react';

const StashContext = React.createContext({
  loading: false,
  setLoading: () => {},
  recipes: [],
  meals: [],
  loggedIn: localStorage.getItem('userLoggedIn'),
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
  addMeal: () => {},
  deleteMeal: () => {},
  userLogIn: () => {},
  userLogOut: () => {},
});

export default StashContext;
