import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 rounded-2xl pad10 h-40 w-60 text-center mb-4 ">
      Hello world!
    </h1>
    <Card username="naseer" />

    </>
  )
}

export default App
