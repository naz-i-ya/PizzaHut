import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users/naz-i-ya'

  const State = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [value, setValue]  = useState(null);

useEffect(() => {
 
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

  fetchData();

},[])
 

  return (
   
  <section>
          <img src={value.avatar_url} />
          <h1>{value.bio}</h1>
          <h6>{value.followers}</h6>
  </section>
  )
}

export default State