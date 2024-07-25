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
import TipsForm from "./TipsForm"
import { Separator } from "./ui/separator"

//TYPES
type OrderContentCardProps = {
    order: OrderItem[],
    removeItem : (id : MenuItem['id']) => void,
    tip : number,
    setTip : React.Dispatch<React.SetStateAction<number>>
}

export default function OrderContentCard( {order, removeItem, tip, setTip} : OrderContentCardProps) {
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
                            <TableCell className="text-left font-medium p-1">{item.name}</TableCell>
                            <TableCell className="text-center p-1">{item.quantity}</TableCell>
                            <TableCell className="text-center p-1">{formatCurrency(item.price*item.quantity)}</TableCell>
                            <TableCell className="text-center p-1">
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
                <div className="grid gap-3 w-full">
                <Separator className="my-2" />                
                <TipsForm 
                    tip={tip}
                    setTip={setTip}
                />
                <Separator className="my-2" />                                
                <OrderTotals order={order} tip={tip}></OrderTotals>
                </div>                
                </CardFooter>
            )}          
        </Card>
    )
}