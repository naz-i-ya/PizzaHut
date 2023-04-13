import { useState } from 'react'
import './App.css'
import State from './useState/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <State />
    </div>
  )
}

export default App
