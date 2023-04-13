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
    const[user, setUser] = useState({
      name: '',
      email: '',
      password: ''
    });



   return(
    <>
    <h1>Form</h1>
    <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' value={user} onChange={(e) => e.target.value}/>

      <label>Name</label>
      <input type='text'/>

      <label>Name</label>
      <input type='text'/>

    </form>
    </>
   );
}


export default State