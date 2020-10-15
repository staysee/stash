import config from '../config'
import TokenService from '../services/token-service'

const MealService = {
    getAllMeals: () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
          };
          
          return fetch(`${config.API_ENDPOINT}/meals`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    getMeal: (mealID) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        }

        return fetch(`${config.API_ENDPOINT}/meals/${mealID}`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    addMeal: (meal) => {
      const serializeMeal = JSON.stringify(meal);
        const requestOptions = {
            method: 'POST',
            body: serializeMeal,
            headers: {
                "Content-Type": 'application/json',
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        }

        return fetch(`${config.API_ENDPOINT}/meals`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    deleteMeal: mealID => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        }

        return fetch(`${config.API_ENDPOINT}/meals/${mealID}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },
}

export default MealService