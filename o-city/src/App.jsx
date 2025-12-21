import Navber from './components/Navber'
import Hero from './components/Hero'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber/>
     <Hero />
     
    </>
  )
}

export default App
