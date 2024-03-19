//fetch API with promises
const testFetchAPI = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then((response) => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error('En error occurred...');
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
}

export {
    testFetchAPI
}