import { useState, useEffect } from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from "./data/db";

function App() {
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

  return (
    <>
    <Header 
        cart={cart}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
    />      
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                    addToCart={addToCart}
                />
            ))}
                        
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
