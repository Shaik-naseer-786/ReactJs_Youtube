import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const addValue=()=>{
    if(count==20) return;
    console.log('clicked',count);
    setCount(count+1);
  }
  const removeValue=()=>{
    if(count==0) return;
    console.log('clicked',count);
    setCount(count-1);
  }
  return (
    <>
      <div className='counter-card'>
      <h1 className='heading'>Count value {count}</h1>
      <div className='button'>
      <button onClick={addValue} >Add count {count}</button>
      <br/>
      <button onClick={removeValue}>Remove count {count}</button>
      </div>
      </div>
    </>
  )
}

export default App
