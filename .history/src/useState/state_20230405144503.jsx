import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[text, setText] = useState('');
   const[name, setName] = useState('Naziya');

  return (
   
  <section>
        <h1>Falsy || : { "Hello From OR" || text}</h1>
        <h1>Truty && : { "Hello From AND" && name}</h1>
  </section>
  )
}

export default State