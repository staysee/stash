import React from 'react'

const StashContext = React.createContext({
    recipes: [],
    meals: {},
    addRecipe: () => {},
    deleteRecipe: () => {},
    addMeal: () => {},
    deleteMeal: () => {}
})

export default StashContext