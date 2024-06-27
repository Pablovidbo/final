class ApiService {
    fetchIngredients(callback) {
        const apiurl = 'app/json/ingredientes.json';
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching ingredients data:', error);
                callback(error);
            });
    }

    fetchRecipes(callback) {
        const apiurl = 'app/json/platos.json';
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching recipes data:', error);
                callback(error);
            });
    }
}

export default ApiService;
