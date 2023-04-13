import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



  const State = () => {
    const [data, setData]  = useState([]);


useEffect(() => {
 
const fetchApi = async() => {
  try{
    const res = await fetch('https://api.github.com/users ');
    const result = await res.json();
    console.log(result);
    setData(data);

  }catch(err){
    console.log(err);
  }

}
 fetchApi();
 
},[])
 

  return (
   
  <section>
    <h1>User List</h1>
    <ul>
      {data.map((itm) => {
        console.log(itm);
        return(
          <li>{itm.login}</li>
        )
      })}
    </ul>
  </section>
  )
}

export default State