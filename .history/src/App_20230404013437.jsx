import { useState } from 'react'
import './App.css'
import state from './useState/state'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <state />
    </div>
  )
}

export default App
