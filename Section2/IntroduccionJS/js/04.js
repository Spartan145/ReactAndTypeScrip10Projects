//Objects

const product = {
    name : "Tablet",
    price : 400,
    isAvaliable : true
}

const person = {
    name : "Mario",
    address : {
        street : "My street"
    }
}

const mergedObject = {
    id : 100,
    ...person
}

//console.log(product);
//console.table(product);
/*
//Old way
const nameOld = product.name;
console.log(nameOld);

//EMC 6 Modern way Destructuring
const {name, price, isAvaliable} = product;
console.log(name + " " + price + " " +isAvaliable);

//Removes a property from an object
delete product.isAvaliable;

//Makes the entire object read only, means that we cannot change values or add or remove more properties
Object.freeze(product);

//Makes the properties within an object read only, means that we can change values but cannot add or remove more properties
Object.seal(product);
*/


const {name} = product;
const {name: namePerson, address:{street:customStreet}, address} = person;

console.log(name);
console.log(namePerson);
console.log(customStreet);
console.log(address);
console.log(mergedObject);