const recipesService = {
    getAllRecipes: () => {
        const requestOptions = {
            method: 'GET',
          };
          
          return fetch("http://stash-api-1.herokuapp.com/api/recipes", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
    insertNewRecipe: (recipe) => {
        const serializeRecipe = JSON.stringify(recipe);
        const requestOptions ={
            method: 'POST',
            body: serializeRecipe,
            headers: {
                "Content-Type": 'application/json'
            }
        }

        return fetch("http://stash-api-1.herokuapp.com/api/recipes", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    }
}

export default recipesService