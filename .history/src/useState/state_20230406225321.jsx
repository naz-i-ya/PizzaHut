import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

     const handleChange = (e) => {
      console.log(e.target.name);
      console.log(e.target.value);
      setEmail(e.target.value);
      setName(e.target.value);
     }

   return(
    <form>
      <h1>Controlled Inputs</h1>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" 
      value={name} onChange={handleChange}/>

      <label htmlFor="email">Email</label>
      <input type="text" id="email"
      value={email} onChange={handleChange} />

      <button type='submit'>Submit</button>
    </form>
   );
}


export default State