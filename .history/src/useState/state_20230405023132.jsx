import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



  const State = () => {
    const [data, setData]  = useState([]);


useEffect(() => {
//  const fetchApi = async() => {
//   const res = await axios('https://api.github.com/users');
//   console.log(res);
//  }
const fetchApi = async() => {
  const res = await fetch('https://api.github.com/users');
  const result = await res.json();
  console.log(result);
}
 setData(fetchApi());
 
},[])
 

  return (
   
    <div>
  <h1>hhhh</h1>
  {
    data.map((itm) => {
      return(
        <h1>{itm.name}</h1>
      )
    })
  }
    </div>
  )
}

export default State