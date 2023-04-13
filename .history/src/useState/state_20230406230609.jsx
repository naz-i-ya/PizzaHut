import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const data = [{
  id: 1,
  name: "Naziya"
},{
  id: 1,
  name: "Naziya"
},
]

  const State = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name, email);
  setName('');
  setEmail('');
 }

   return(
    <form onSubmit={handleSubmit}>
      <h1>Controlled Inputs</h1>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" 
      value={name} onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="email">Email</label>
      <input type="text" id="email"
      value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type='submit'>Submit</button>
    </form>
   );
}


export default State