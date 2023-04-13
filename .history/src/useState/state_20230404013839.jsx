import React from 'react'
import { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default State