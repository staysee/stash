import React from 'react'

const StashContext = React.createContext({
    recipes: [],
    meals: [],
    loggedIn: false,
    addRecipe: () => {},
    deleteRecipe: () => {},
    updateRecipe: () => {},
    addMeal: () => {},
    deleteMeal: () => {}
})

export default StashContext