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

  const submitForm = (e) => {
    e.preventDefault();
    console.log('submit');
  }

const handleChange = (e) => {
  console.log('submit');
  const newData = {...name, [e.target.name]: e.target.value};
  console.log(newData);
  setUser(newData);
}

   return(
    <>
    <h1>Form</h1>
    <form onClick={submitForm}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' value={user.name} onChange={handleChange}/>

      <label>Email</label>
      <input type='email' name='email' value={user.email} onChange={handleChange}/>

      <label>Password</label>
      <input type='Password' name='password' value={user.password} onChange={handleChange}/>

      <button type='submit'>Submit</button>

    </form>
    </>
   );
}


export default State