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
  id: 3,
  name: "Deviya"
},
]

  const State = () => {
    const[name, setName] = useState('');
    const[user, setUser] = useState(data);

 const handleSubmit = (e) => {
  e.preventDefault();
  const newUser = {id:Date.now(), name:name};

  const newData = [...user, newUser];
  setUser(newData);
  setName('');
console.log("Submitted");
 }

 const deleteItem = () => {
  const dltItm = user.filter((itm) => {itm.id !== id})
  setUser(dltItm);
 }

   return(
    <>
    <form onSubmit={handleSubmit}>
      <h1>Controlled Inputs</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" 
      value={name} onChange={(e) => setName(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
    <h4>Users</h4>
    {
      user.map((itm) => {
        const {id, name} = itm;
        console.log(itm);
        return(
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={deleteItem}>Delete</button>
          </div>
        );
      })
    }
    </>
   );
}


export default State