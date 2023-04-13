import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const data = [{
  id: 1,
  name: "Naziya"
},{
  id: 2,
  name: "Developer"
},{
  id: 2,
  name: "Deviya"
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
        user.map((itm) => {
          const{id, name} = itm;
          return(
            <div>
             <label htmlFor="name">{name}</label>
      <input type="text" id="name" 
      value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
          );
        })
      }

      <button type='submit'>Submit</button>
    </form>
   );
}


export default State