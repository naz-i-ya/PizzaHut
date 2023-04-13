import React from 'react'
import { useState, useEffect } from 'react'



  const State = () => {
    const [data, setData]  = useState([]);


useEffect(() => {
  console.log(`https://jsonplaceholder.typicode.com/users`);
},[])
 

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