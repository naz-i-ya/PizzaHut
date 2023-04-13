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

    </>
   );
}


export default State