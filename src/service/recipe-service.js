import config from '../config'

const recipesService = {
    getAllRecipes: () => {
        const requestOptions = {
            method: 'GET',
          };
          
          return fetch(`${config.API_ENDPOINT}/recipes`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    getRecipe: (recipeID) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        }

        return fetch(`${config.API_ENDPOINT}/recipes/${recipeID}`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));

    },
    insertNewRecipe: (newRecipe) => {
        const serializeRecipe = JSON.stringify(newRecipe);
        const requestOptions = {
            method: 'POST',
            body: serializeRecipe,
            headers: {
                "Content-Type": 'application/json'
            }
        }

        return fetch(`${config.API_ENDPOINT}/recipes`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    deleteRecipe: (recipeID) => {
        const serializeRecipe = JSON.stringify(recipeID);
        const requestOptions = {
            method: 'DELETE',
            body: serializeRecipe,
            headers: {
                "Content-Type": 'application/json'
            },
        }

        return fetch(`${config.API_ENDPOINT}/recipes/${recipeID}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },
    updateRecipe: (recipeID) => {
        const serializeRecipe = JSON.stringify(recipeID);
        const requestOptions = {
            method: 'PATCH',
            body: serializeRecipe,
            headers: {
                "Content-Type": 'application/json'
            },
        }

        return fetch(`${config.API_ENDPOINT}/recipes/${recipeID}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}

export default recipesService