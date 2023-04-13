import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[text, setText] = useState('');
   const[name, setName] = useState('Naziya');

  return (
   
  <section>
        <h1>Falsy || : {text || "Hello From OR"}</h1>
        <h1>Truty && : { "Hello From AND" && name}</h1>
  </section>
  )
}

export default State