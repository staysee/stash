import React from 'react'

const StashContext = React.createContext({
    recipes: [],
    meals: [],
    addRecipe: () => {},
    deleteRecipe: () => {},
    updateRecipe: () => {},
    addMeal: () => {},
    deleteMeal: () => {}
})

export default StashContext