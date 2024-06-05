import { MenuItem, OrderItem } from "@/types"
import { CircleX } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,    
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

//HELPERS
import { formatCurrency } from "@/helpers"
import OrderTotals from "./OrderTotals"

//TYPES
type OrderContentCardProps = {
    order: OrderItem[],
    removeItem : (id : MenuItem['id']) => void
}

export default function OrderContentCard( {order, removeItem} : OrderContentCardProps) {
    return(
        <Card className="basis-1/2 border-t-lime-700 border-t-4 shadow-md">
          <CardHeader>
            <CardTitle>Total</CardTitle>
            <CardDescription>The total is displayed here</CardDescription>
          </CardHeader>
          <CardContent>   
            {order.length===0?(
                <p>There are not items in the order, please select at least one from the menu</p>
            ):(
                <Table>                    
                    <TableHeader>
                        <TableRow>
                        <TableHead className="text-center">Item</TableHead>                                        
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-center">Total</TableHead>
                        <TableHead className="text-center">Options</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>   
                        {order.map(item => (
                            <TableRow key={item.id}>
                            <TableCell className="text-left font-medium">{item.name}</TableCell>
                            <TableCell className="text-center">{item.quantity}</TableCell>
                            <TableCell className="text-center">{formatCurrency(item.price*item.quantity)}</TableCell>
                            <TableCell className="text-center">
                                <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                                    <CircleX className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}                                         
                    </TableBody>
                </Table>
            )}                     
          </CardContent>
            {order.length===0?(
                <></>
            ):(
                <CardFooter className="flex-col">
                <OrderTotals order={order}></OrderTotals>
                </CardFooter>
            )}          
        </Card>
    )
}