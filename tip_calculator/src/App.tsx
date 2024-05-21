import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {  

  return (        
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6">
        <h5 className="flex-1 text-center text-2xl font-black">TIPS CALCULATOR</h5>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <ModeToggle></ModeToggle>
        </nav>                
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 sm:flex-row flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 ">
        <Card className="basis-1/2 border-t-lime-700 border-t-4 shadow-md">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Select any products you need</CardDescription>
          </CardHeader>
          <CardContent>
            {menuItems.map((item) => (            
              <MenuItem 
              key={item.id}
              item={item}></MenuItem>                
            ))}
          </CardContent>
          <CardFooter>
            <p>End</p>
          </CardFooter>
        </Card>
        <Card className="basis-1/2 border-t-lime-700 border-t-4 shadow-md">
          <CardHeader>
            <CardTitle>Total</CardTitle>
            <CardDescription>The total is displayed here</CardDescription>
          </CardHeader>
          <CardContent>            
            <p>Total</p>                            
          </CardContent>
          <CardFooter>
            <p>End</p>
          </CardFooter>
        </Card>
      </main>
    </div>
    </ThemeProvider>        
  )
}

export default App
