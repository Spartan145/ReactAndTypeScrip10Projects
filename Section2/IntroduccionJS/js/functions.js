//Method to export 1
/*
export function sum(num1, num2){
    return num1 + num2;
}

export function substract(num1, num2){
    return num1 - num2;
}
*/

//Method to export 2
function sum(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

export{
    sum,
    substract
}

//Export default
export default function multiply(num1, num2){
    return num1 * num2;
}