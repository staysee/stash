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
        },
        {
            "id": "4testRecipeId",
            "title": "Ice Cream",
            "ingredients": ["milk, ice, salt, cream"],
            "instructions": "Blah Blah blah Blah",
            "type": "Dinner",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        },
        {
            "id": "5testRecipeId",
            "title": "Curry",
            "ingredients": ["beef, carrots, potato, curry sauce, rice"],
            "instructions": "Blah Blah blah Blah",
            "type": "Lunch",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        },
        {
            "id": "6testRecipeId",
            "title": "Spaghetti",
            "ingredients": ["pasta, marinara sauce, mushrooms, meatballs"],
            "instructions": "Blah Blah blah Blah",
            "type": "Lunch",
            "imageURL": "https://via.placeholder.com/100",
            "createdBy": "userid1"
        }
    ],
    meals: {
            "Monday": {
                "breakfast": {
                    "recipeId": "1testRecipeId"
                },
                "lunch": {
                    "recipeId": "2testRecipeId" 
                },
                "dinner" : {
                    "recipeId": "3testRecipeId"
                }
            },
            "Tuesday": {
                "breakfast": {
                    "recipeId": "4testRecipeId"
                },
                "lunch": {
                    "recipeId": "5testRecipeId" 
                },
                "dinner" : {
                    "recipeId": "6testRecipeId"
                }

            },
            "Wednesday": {
                "breakfast": {},
                "lunch": {},
                "dinner" : {}
            },
            "Thursday": {
                "breakfast": {},
                "lunch": {},
                "dinner" : {}

            },
            "Friday": {
                "breakfast": {},
                "lunch": {},
                "dinner" : {}
            },
            "Saturday": {
                "breakfast": {},
                "lunch": {},
                "dinner" : {}
            },
            "Sunday": {
                "breakfast": {},
                "lunch": {},
                "dinner" : {}
            }
    }
}

export default store

