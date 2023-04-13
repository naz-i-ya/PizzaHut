import React from 'react'
import { useState, useEffect } from 'react'

const data = {
    id: 1,
    name: 'Naziya',
    age: 25,
    hobby: 'code'
  }


  const State = () => {
    const [firstValue, setFirstValue]  = useState(0);
    const [secondValue, setSecondValue]  = useState(0);


 

  return (
   
    <div>
      {firstValue}
      <button onClick={() => setFirstValue (firstValue+ 1)}>First Value</button>
      {secondValue}
      <button onClick={() => setSecondValue(secondValue + 1)}>Second Value</button>
    </div>
  )
}

export default State