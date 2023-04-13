import React from 'react'
import { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    count >= 0 ?
    setCount(count - 1) :
    null
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default State