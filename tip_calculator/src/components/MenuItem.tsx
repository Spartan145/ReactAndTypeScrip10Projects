import type { MenuItem } from "../types"
import { Button } from "@/components/ui/button"

type MenuItemProps = {
  item : MenuItem,
  addItem : (item : MenuItem) => void
}

export default function MenuItem( {item, addItem} : MenuItemProps ) {
  return (
    <Button variant="outline" className="
      w-full
      p-3
      flex
      justify-between      
    "
    onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </Button>
  )
}
