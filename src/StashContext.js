import React from 'react'

const StashContext = React.createContext({
    recipes: [],
    meals: [],
    loggedIn: false,
    addRecipe: () => {},
    deleteRecipe: () => {},
    updateRecipe: () => {},
    addMeal: () => {},
    deleteMeal: () => {},
    userLogIn: () => {},
    userLogOut: () => {}
})

export default StashContext