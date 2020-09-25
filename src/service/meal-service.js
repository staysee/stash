import config from '../config'

const mealService = {
    getAllMeals: () => {
        const requestOptions = {
            method: 'GET',
          };
          
          return fetch(`${config.API_ENDPOINT}/meals`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    getMeal: (mealID) => {
        const requestOptions = {
            method: 'GET',
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
                "Content-Type": 'application/json'
            }
        }

        return fetch(`${config.API_ENDPOINT}/meals`, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    deleteMeal: mealID => {
      const serializeMeal = JSON.stringify(mealID);
        const requestOptions = {
            method: 'DELETE',
            body: serializeMeal,
            headers: {
                "Content-Type": 'application/json'
            },
        }

        return fetch(`${config.API_ENDPOINT}/meals/${mealID}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    },
}

export default mealService