import Navber from './components/Navber'
import Hero from './components/Hero'
import { useState } from 'react'
import Category from './components/category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber/>
     <Hero />
     <Category />
    </>
  )
}

export default App
