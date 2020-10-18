import config from '../config'
import TokenService from './token-service';

const RecipesService = {
    getAllRecipes: () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
          };
          
          return fetch(`${config.API_ENDPOINT}/recipes`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    getUserRecipes: () => {
        const token = TokenService.getAuthToken()
        if (!token) {
            return Promise.resolve([])
        }
        const requestOptions = {
            method: 'GET',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
          };
          
          return fetch(`${config.API_ENDPOINT}/recipes/user`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    getRecipe: (recipeID) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "authorization": `bearer ${TokenService.getAuthToken()}`
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
                "Content-Type": 'application/json',
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        }

        return fetch(`${config.API_ENDPOINT}/recipes`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    deleteRecipe: (recipeID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        }

        return fetch(`${config.API_ENDPOINT}/recipes/${recipeID}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },
    updateRecipe: (recipe) => {
        const serializeRecipe = JSON.stringify(recipe);
        delete serializeRecipe.id
        
        const requestOptions = {
            method: 'PATCH',
            body: serializeRecipe,
            headers: {
                "Content-Type": 'application/json',
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
        }

        return fetch(`${config.API_ENDPOINT}/recipes/${recipe.id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}

export default RecipesService