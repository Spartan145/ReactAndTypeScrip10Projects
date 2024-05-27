import { useState } from "react"
import type { MenuItem, OrderItem } from "@/types"

export default function useOrder() {    

    const addItem = (item : MenuItem) => {
        const newItem : OrderItem = {...item, quantity: 1}//Example of setting of type of object, this is not needed if you used generics like I did to create the order state        
        const itemExist = order.findIndex( orderItem => orderItem.id === newItem.id);
        if(itemExist === -1){            
            setOrder([...order,newItem])               
        }else{
            const tempOrder = [...order];
            tempOrder[itemExist].quantity++;
            setOrder(tempOrder);
        }            
    }

    const removeItem = (id : MenuItem['id']) => {//use a lookup to determine the ID type
        setOrder(order.filter(item => item.id !== id))
    }

    const [order, setOrder] = useState<OrderItem[]>([]) //Example of setting a generic type
    return {
        order,
        addItem,
        removeItem
    }
}