import { useState } from "react"
import type { OrderItem } from "@/types"

export default function useOrder() {    

    const [order, setOrder] = useState<OrderItem[]>([]) //Example of setting a generic type
    return {

    }
}