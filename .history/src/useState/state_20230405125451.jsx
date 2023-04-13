import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



  const State = () => {
    const [value, setValue]  = useState(true);


useEffect(() => {
 
setTimeout(() => {
  setValue(false)
}, 2000) 
},[])
 

  return (
   
  <section>
    {value ? 'Has Value' : "Nope"}
  </section>
  )
}

export default State