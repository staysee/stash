import React from 'react'

const StashContext = React.createContext({
    recipes: [],
    meals: {},
    addRecipe: () => {},
    deleteRecipe: () => {}
})

export default StashContext