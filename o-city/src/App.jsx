import Navber from './components/Navber'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navber/>
    </>
  )
}

export default App
