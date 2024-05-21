import type { MenuItem } from "../types"
import { Button } from "@/components/ui/button"

type MenuItemProps = {
  item : MenuItem
}

export default function MenuItem( {item} : MenuItemProps ) {
  return (
    <Button variant="outline" className="
      w-full
      p-3
      flex
      justify-between      
    ">
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </Button>
  )
}
