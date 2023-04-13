import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users/naz-i-ya'

  const State = () => {
    const [value, setValue]  = useState([]);


useEffect(() => {
 
setTimeout(() => {
  setValue(false)
  console.log('settimeout');
}, 2000) 
},[])
 

  return (
   
  <section>
    {value ? 'Has Value' : "Nope"}
  </section>
  )
}

export default State