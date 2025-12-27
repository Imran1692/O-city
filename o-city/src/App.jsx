import Navber from './components/Navber'
import Hero from './components/Hero'
import { useState } from 'react'
import Category from './components/category'
import Values from './components/Values'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber/>
     <Hero />
     <Category />
     <Values />
     <Products />
    </>
  )
}

export default App
