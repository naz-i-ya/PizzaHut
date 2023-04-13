import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users/naz-i-ya'

  const State = () => {
    const [value, setValue]  = useState([]);


useEffect(() => {
 
setTimeout(() => {
  const fetchData  = async() => {
    try{
      const res = await fetch(url);
      const result =  await res.json();
      console.log(result);
      setValue(result);
    }catch(err){
        console.log({err});
    }
  }
  setValue(false)
  console.log('settimeout');
  fetchData();
}, 2000) 

},[])
 

  return (
   
  <section>
   <ul>
    {value.map((itm) => {
      const{ avatar_url, id, bio, repos_url
      } = itm
      return (
        <li key={id}>
          <img src={avatar_url} />
        </li>
      )
    } )}
   </ul>
  </section>
  )
}

export default State