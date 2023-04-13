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

 const handleSubmit = (e) => {
  e.preventDefault();
  const newUser = {id:Date.now(), name:name};

  const newData = [...user, newUser];
  setUser(newData);
  setName('');
console.log("Submitted");
 }



   return(
    <>
    
    </>
   );
}


export default State