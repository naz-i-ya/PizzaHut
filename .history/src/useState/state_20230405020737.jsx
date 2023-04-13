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

useEffect(() => {
  console.log('First useeffect');
},[firstValue, secondValue])
 

  return (
   
    <div>
      {firstValue}
      <button onClick={() => setFirstValue (firstValue+ 1)}>First Value</button><br />
      {secondValue}
      <button onClick={() => setSecondValue(secondValue + 1)}>Second Value</button>
    </div>
  )
}

export default State