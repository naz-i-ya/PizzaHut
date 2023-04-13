import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[user, setUser] = useState(null);
  
   const btnLogin = () => {
    setUser({
      name: "Naziya"
    })
   }
   const btnLogout = () => {
    setUser(user)
   }


  return (
   
  <section>
    <h1>Hello Dev</h1>
    {
      user ? <><h4>Hello There ${user.name}</h4>
 <button onClick={btnLogout}>Logout</button>
      </> : 
      <>
      <h4>Please Login....</h4>
      <button onClick={btnLogin}>Login</button>
      </>
    }
    
    
  </section>
  )
}


export default State