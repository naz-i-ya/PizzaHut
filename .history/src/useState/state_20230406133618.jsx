import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


  const State = () => {
   const[text, setText] = useState(true);
   const[name, setName] = useState({name: "naziya"});

  return (
   
  <section>
       <button>Toggel</button>
  </section>
  )
}

const newCompo = ({ name }) => {
  return(
    <>Hey ${name} youre in love with dev</>
  );
}

export default State