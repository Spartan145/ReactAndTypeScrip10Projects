//fetch API with promises
const testAsyncAwait = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);    
    } catch (error) {
        console.log(error);   
    }            
}

export {
    testAsyncAwait
}