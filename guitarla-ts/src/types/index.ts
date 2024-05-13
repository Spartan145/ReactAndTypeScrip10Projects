export type Guitar = {//Defines the class for my db object, this is a example of Type
    id : number
    name : string
    image : string
    description : string
    price : number
}

export type CartItem = Guitar & {//Example to extend a Type or inheritance in Types    
    quantity : number
}

/*interface Guitar = {//Defines the class for my db object, this is a example of Interface
    id : number
    name : string
    image : string
    description : string
    price : number
}

interface CartItem extends Guitar {//Example to extend a Type or inheritance in Interfaces  
    id : number
    name : string
    image : string
    description : string
    price : number
}

*/
