import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import RecipesList from './RecipesList/RecipesList'


class StashedRecipesPage extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            recipes: [
                {
                    "id": "1testRecipeId",
                    "title": "Egg Scramble",
                    "ingredients": ["eggs", "salt", "pepper"],
                    "instructions": "Blah Blah blah Blah",
                    "type": "Breakfast",
                    "imageURL": "https://via.placeholder.com/100"
                },
                {
                    "id": "2testRecipeId",
                    "title": "Salad",
                    "ingredients": ["eggs", "lettuce", "tomatoes", "dressing"],
                    "instructions": "Blah Blah blah Blah",
                    "type": "Lunch",
                    "imageURL": "https://via.placeholder.com/100"
                },
                {
                    "id": "3testRecipeId",
                    "title": "Steak",
                    "ingredients": ["steak", "salt", "pepper", "garlic", "butter"],
                    "instructions": "Blah Blah blah Blah",
                    "type": "Dinner",
                    "imageURL": "https://via.placeholder.com/100"
                }
            ]
        }
    }

    render() {
        return (
            <div className="StashedRecipesPage">
                <PageHeader title="Stashed Recipes" />
                <div>Add Recipe</div>
                <div>Search Filter</div>
                <RecipesList recipes={this.state.recipes}/>
            </div>
        )
    }

}


export default StashedRecipesPage