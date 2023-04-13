import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[text, setText] = useState(false);
   const[name, setName] = useState({name: "naziya"});


  return (
   
  <section>
    <h1>Hello Dev</h1>
       <button onClick={() => setText(!text)}>Toggel</button>
       {/* {
        text && <NewCompo name={name} />
       } */}
  </section>
  )
}

const NewCompo = ({ name }) => {
  return(
    <>Hey ${name} youre in love with dev</>
  );
}

export default State