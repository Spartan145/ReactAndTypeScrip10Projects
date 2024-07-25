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

//Looup example, in case you need just an specific value defines in a class
export type GuitarID = Guitar['id']

//Utility types used to especify which attributes I want to inherit from another type    
export type CartItemPick = Pick<Guitar, 'id' | 'name' | 'price'> & {//Choose the attributes you need
    quantity : number
}

export type CartItemOmit = Omit<Guitar, 'id' | 'name' | 'price'> & {//Choose the attributes you DONT need
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
