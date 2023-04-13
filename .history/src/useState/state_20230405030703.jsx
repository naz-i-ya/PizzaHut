import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



  const State = () => {
    const [value, setValue]  = useState(true);


useEffect(() => {
 
console.log('useeffect');
 
},[])
 

  return (
   
  <section>
    <button onClick={() => setValue(!value)}>{value}button</button>
  </section>
  )
}

export default State