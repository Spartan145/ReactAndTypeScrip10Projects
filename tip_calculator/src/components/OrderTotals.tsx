import { formatCurrency } from '@/helpers'
import { OrderItem } from '@/types'
import { useMemo } from 'react'
import TipsForm from './TipsForm'
import { Separator } from './ui/separator'

//TYPES
type OrderTotalsProps = {
    order: OrderItem[]    
}

export default function OrderTotals({order} : OrderTotalsProps) {
    const subTotalAmount = useMemo(() => formatCurrency(order.reduce((accum,item) => accum + (item.price * item.quantity), 0)),[order])

    return (
        <>
            <div className="grid gap-3 w-full">
                <Separator className="my-2" />                
                <TipsForm></TipsForm>
                <Separator className="my-2" />
                <p className="text-xl text-left font-extrabold w-full">Subtotal: {subTotalAmount}</p>                        
                <p className="text-xl text-left font-extrabold w-full">Total: </p>
            </div>
        </>        
    )
}
