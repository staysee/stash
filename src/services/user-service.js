const UsersService = {
    getAllUsers: () => {
        const requestOptions = {
            method: 'GET',
          };
          
          return fetch("http://stash-api-1.herokuapp.com/api/users", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
    },
}

export default UsersService