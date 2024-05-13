import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";

//Types
import type {Guitar, GuitarID, CartItem} from '../types'

//Hooks name should always start with use
//Hooks must be defined in JS/TS files, not JSX or TSX
//Hooks are basically functions you can declare them as function XXX or arrow function like in this example
export const useCart = () => {
    //General variables
    const MAX_ITEMS = 5;
    const MINIMUM_ITEMS = 1;

    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    //States
    //const [data, setData] = useState([]);
    const [data, setData] = useState(db);
    const [cart, setCart] = useState(initialCart);

    //Effects
    /*/useEffect(() => {
        setData(db);
    }, []);*/


    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart])    

    function addToCart(itemToAdd: Guitar){
        const itemExist = cart.findIndex( item => item.id === itemToAdd.id);
        if(itemExist === -1){
            const newItem : CartItem = {...itemToAdd, quantity : 1}            
            setCart([...cart, newItem]);
        }else{
            const tempCart = [...cart];
            tempCart[itemExist].quantity++;
            setCart(tempCart);
        }        
    }

    function removeItem(id : GuitarID){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));        
    }

    function increaseQuantity(id : GuitarID){        
        const tempCart = cart.map(item => {
            if(item.id === id && item.quantity<MAX_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity + 1//For some reason putting ++ here does not work in react to increase the number.
                }
            }
            return item
        })
        setCart(tempCart);       
    }

    function decreaseQuantity(id : Guitar['id']){//Applied another example of lookup for the id, this means a I do not need to create an specific type just for this.
        const tempCart = cart.map(item => {
            if(item.id === id && item.quantity>MINIMUM_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity - 1//For some reason putting ++ here does not work in react to increase the number.
                }
            }
            return item
        })
        setCart(tempCart);
    }

    function clearCart(){
        setCart([]);
    }

    //Derived State
    const isEmpty = useMemo(() => cart.length === 0,[cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    return {
        data,
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}

