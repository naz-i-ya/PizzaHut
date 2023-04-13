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
      
  </section>
  )
}


export default State