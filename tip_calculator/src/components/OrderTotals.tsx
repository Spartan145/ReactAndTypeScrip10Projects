import { formatCurrency } from '@/helpers'
import { OrderItem } from '@/types'
import { useMemo } from 'react'
import { Button } from './ui/button'

//TYPES
type OrderTotalsProps = {
    order: OrderItem[]
    tip:number    
}

export default function OrderTotals({order, tip} : OrderTotalsProps) {
    const subTotalAmount = useMemo(() => order.reduce((accum,item) => accum + (item.price * item.quantity), 0),[order])
    const tipAmount = useMemo(() => subTotalAmount * tip,[tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount,[tip, order])

    return (
        <>
            <p className="text-xl text-left font-extrabold w-full">Subtotal: {formatCurrency(subTotalAmount)}</p>                        
            <p className="text-xl text-left font-extrabold w-full">Tip: {formatCurrency(tipAmount)}</p>
            <p className="text-xl text-left font-extrabold w-full">Total: {formatCurrency(totalAmount)}</p>
            <Button className="w-full disabled:opacity-30 mt-5" disabled={totalAmount===0}>Save</Button>
        </>        
    )
}
