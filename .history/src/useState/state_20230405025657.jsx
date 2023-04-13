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
    console.log("resulr", result);
    setData(result);

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
        console.log("itm", itm);
        const {login, id, avatar_url, html_url} = itm
        return(
          <li key={id}>
            <img src={avatar_url} />
            <h1>{login}</h1>
            <h4>{html_url}</h4>
            <h4>https://github.com/naz-i-ya</h4>
            <img src='https://github.com/naz-i-ya' />
          </li>          
        )
      })}
    </ul>
  </section>
  )
}

export default State