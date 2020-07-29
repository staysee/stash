const store = {
    recipes: [
        {
            "id": "1testRecipeId",
            "title": "Egg Scramble",
            "ingredients": ["eggs", "salt", "pepper"],
            "instructions": "Blah Blah blah Blah",
            "type": "Breakfast",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        },
        {
            "id": "2testRecipeId",
            "title": "Salad",
            "ingredients": ["eggs", "lettuce", "tomatoes", "dressing"],
            "instructions": "Blah Blah blah Blah",
            "type": "Lunch",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        },
        {
            "id": "3testRecipeId",
            "title": "Steak",
            "ingredients": ["steak", "salt", "pepper", "garlic", "butter"],
            "instructions": "Blah Blah blah Blah",
            "type": "Dinner",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        }
    ],
    meals: {
            "Monday": [
                {
                    "id": "1testMealId",
                    "type": "Lunch",
                    "recipeId": "3testRecipeId"
                },
                {
                    "id": "2testMealId",
                    "type": "Breakfast",
                    "recipeId": "1testRecipeId",
                },
                {
                    "id": "3testMealId",
                    "type": "Dinner",
                    "recipeId": "3testRecipeId"
                }
            ],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": [],
            "Saturday": [],
            "Sunday": [],
    }
}

export default store