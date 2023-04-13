import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const data = [{
  id: 1,
  name: "Naziya"
},{
  id: 2,
  name: "Developer"
},
]

  const State = () => {
    const[name, setName] = useState('');
    const[user, setUser] = useState(data);

 const handleSubmit = (e) => {
  e.preventDefault();

 }

   return(
    <form onSubmit={handleSubmit}>
      <h1>Controlled Inputs</h1>
      {
        data.map((itm) => {
          return(
            <>
             <label htmlFor="name">{itm.name}</label>
      <input type="text" id="name" 
      value={name} onChange={(e) => setName(e.target.value)}/>

            </>
          );
        })
      }

      <label htmlFor="name">Name</label>
      <input type="text" id="name" 
      value={name} onChange={(e) => setName(e.target.value)}/>

      <button type='submit'>Submit</button>
    </form>
   );
}


export default State