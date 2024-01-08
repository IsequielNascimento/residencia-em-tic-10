import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Card/>
    
    </>
  )
}

export default App
