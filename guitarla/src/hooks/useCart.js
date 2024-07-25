import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";

//Hooks name should always start with use
//Hooks must be defined in JS/TS files, not JSX or TSX
//Hooks are basically functions you can declare them as function XXX or arrow function like in this example
export const useCart = () => {
    //General variables
    const MAX_ITEMS = 5;
    const MINIMUM_ITEMS = 1;
    const initialCart = () => {
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

    function addToCart(newItem){
        const itemExist = cart.findIndex( item => item.id === newItem.id);
        if(itemExist === -1){
            newItem.quantity = 1;
            setCart([...cart, newItem]);
        }else{
            const tempCart = [...cart];
            tempCart[itemExist].quantity++;
            setCart(tempCart);
        }        
    }

    function removeItem(id){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));        
    }

    function increaseQuantity(id){        
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

    function decreaseQuantity(id){
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

