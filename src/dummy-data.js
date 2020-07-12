export default {
    "recipes": [
      {
        "id": "1testRecipeId",
        "title": "Egg Scramble",
        "ingredients": ["eggs", "salt", "pepper"],
        "instructions": "Blah Blah blah Blah",
        "type": "Breakfast"
      },
      {
        "id": "2testRecipeId",
        "title": "Salad",
        "ingredients": ["eggs", "lettuce", "tomatoes", "dressing"],
        "instructions": "Blah Blah blah Blah",
        "type": "Lunch"
      },
      {
        "id": "3testRecipeId",
        "title": "Steak",
        "ingredients": ["steak", "salt", "pepper", "garlic", "butter"],
        "instructions": "Blah Blah blah Blah",
        "type": "Dinner"
      }
    ],
    "meals": [
      {
        "id": "1testMealId",
        "day": "Monday",
        "time": "Breakfast",
        "recipeId": "1testRecipeId"
      },
      {
        "id": "2testMealId",
        "day": "Monday",
        "time": "Lunch",
        "recipeId": "2testRecipeId"
      },
      {
        "id": "3testMealId",
        "day": "Monday",
        "recipeId": "3testRecipeId"
      },
    ]
  }