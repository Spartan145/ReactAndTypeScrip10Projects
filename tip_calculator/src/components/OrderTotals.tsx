import { formatCurrency } from '@/helpers'
import { OrderItem } from '@/types'
import { useMemo } from 'react'

//TYPES
type OrderTotalsProps = {
    order: OrderItem[]    
}

export default function OrderTotals({order} : OrderTotalsProps) {
    const subTotalAmount = useMemo(() => formatCurrency(order.reduce((accum,item) => accum + (item.price * item.quantity), 0)),[order])

    return (
        <>
            <p className="text-xl text-left font-extrabold w-full">Subtotal: {subTotalAmount}</p>
            <p className="text-xl text-left font-extrabold w-full">Tip: </p>
            <p className="text-xl text-left font-extrabold w-full">Total: </p>
        </>        
    )
}
