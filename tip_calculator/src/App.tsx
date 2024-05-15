import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"

function App() {  

  return (        
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="bg-orange-400 py-5">
      <h1 className="text-base font-black">Hola mundo</h1>
      <ModeToggle></ModeToggle>   
      </header>                  
    </ThemeProvider>        
  )
}

export default App
