const store = {
    recipes: [
        {
            "id": 1,
            "title": "Egg Scramble",
            "ingredients": "1 teaspooon butter, 2 large eggs, 1/4 tsp black pepper, 1/8 tspn salt",
            "instructions": "Melt butter on pan. Beat eggs with salt and pepper. Scramble on pan.",
            "meal_type": "Breakfast",
            "image_url": "https://bit.ly/3cl2ljY",
            "user_id": 1
        },
        {
            "id": 2,
            "title": "Zuchini and Tomato Salad",
            "ingredients": "Zucchini, Salt, Tomatoes, Red Onion, Olive Oil",
            "instructions": "Slice zuchini the zucchini, tomatoes, and redo onion. Toss with olive oil.",
            "meal_type": "Lunch",
            "image_url": "https://bit.ly/33QvvUe",
            "user_id": 1
        },
        {
            "id": 3,
            "title": "Grilled Steak",
            "ingredients": "Steak, salt, pepper, garlic, butter",
            "instructions": "Season the salt. Grill steak until medium rare.",
            "meal_type": "Dinner",
            "image_url": "https://bit.ly/3cotna1",
            "user_id": 1
        },
        {
            "id": 4,
            "title": "Ice Cream",
            "ingredients": "1 cup whole milk, 3/4 cup sugar, 2 cups heavy cream, pinch of salt, 1 vanilla bean",
            "instructions": "Mix ingredients in a pot. Mix until mixture thickens. Freeze.",
            "meal_type": "Snack",
            "image_url": "https://bit.ly/33VsTnW",
            "user_id": 1
        },
    ],
    meals: {
        "Monday": [
            {
                "id": 1,
                "recipe_id": 2,
                 "user_id": 1
            },
            {
                "id": 2,
                "recipe_id": 1,
                "user_id": 1
            },
            {
                "id": 3,
                "recipe_id": 3,
                "user_id": 1
            }
    
        ],
        "Tuesday": [
            {
                "id": 4,
                "recipe_id": 4,
                "user_id": 1
            }
        ],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": []
    },
    users: [
        {
            "id": 1,
            "username": 'janedoe@test.com',
            "firstname": 'Jane',
            "lastname": 'Doe',
            "password": 'password1',
        },
        {
            "id": 2,
            "username": 'johndoe@test.com',
            "firstname": 'John',
            "lastname": 'Doe',
            "password": 'password1',   
        },
        {

        }
    ]
}

export default store

