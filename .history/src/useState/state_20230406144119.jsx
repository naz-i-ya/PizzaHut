import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[user, setUser] = useState(false);
  
   


  return (
   
  <section>
    <h1>Hello Dev</h1>
    
    <button onClick={() => setUser(!user)}>Toggel</button>
    {
      user && <SecondCompo />
    }
  </section>
  )
}

const SecondCompo = () => {

  useEffect(() => {
    console.log("Calling From Second Compo UseEffect only initial rendering");
  });
  return(
    <h1>Second Compo</h1>
  );
}


export default State