import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



  const State = () => {
    const [data, setData]  = useState([]);


useEffect(() => {
 const fetchApi = async() => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
  console.log(res);
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