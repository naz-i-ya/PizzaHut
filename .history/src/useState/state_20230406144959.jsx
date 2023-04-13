import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[user, setUser] = useState(false);
  
   


  return (
   
  <section>
    <h1>Hello Devloper</h1>
    
    <button onClick={() => setUser(!user)}>Toggel</button>
    {
      user && <SecondCompo user={user} />
    }
  </section>
  )
}

const SecondCompo = ({ user }) => {

  useEffect(() => {
    console.log("Calling From Second Compo UseEffect only initial rendering");
  },[user]);
  return(
    <h1>Second Compo</h1>
  );
}


export default State