import React from 'react'
import { useState, useEffect } from 'react'



  const State = () => {
    const [data, setData]  = useState([]);


useEffect(() => {
 const fetchApi = async() => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
 }
},[])
 

  return (
   
    <div>
  =
    </div>
  )
}

export default State