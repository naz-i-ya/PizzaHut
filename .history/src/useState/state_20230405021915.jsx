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
 fetchApi();

},[])
 

  return (
   
    <div>
  =
    </div>
  )
}

export default State