import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[user, setUser] = useState(null);
   const[login, setLogin] = useState({name: 'naziya', relation: "wife"});
   const[logout, setLogout] = useState(null);


  return (
   
  <section>
    <h1>Hello Dev</h1>
      {
        user ? <><h4>Hello there...,${login.name}</h4>
        <button>Logout</button> 
        </>: <><h4>please login</h4>
        <button>Login</button></>
      }
  </section>
  )
}


export default State