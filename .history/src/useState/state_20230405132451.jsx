import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users/naz-i-ya'

  const State = () => {
    const [value, setValue]  = useState(null);
console.log({value});

useEffect(() => {
 
  const fetchData  = async() => {
    try{
      const res = await fetch(url);
      const result =  await res.json();
      console.log(result);
    }catch(err){
        console.log({err});
    }
  }

  fetchData();

},[])
 

  return (
   
  <section>
  
          <img src={value.avatar_url} />
          <h1>{value.bio}</h1>
          <h4>{value.repos_url}</h4>
  </section>
  )
}

export default State