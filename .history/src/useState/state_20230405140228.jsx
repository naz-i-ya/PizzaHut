import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://sapi.github.com/users/naz-i-ya'

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
      setError(true)
        console.log({err});
    }
    setLoading(false);
  }

  fetchData();

},[])
 
if(loading) return <h1>Loading</h1>
if(error) return <h1>Ough....THERES AN ERROR</h1>

  return (
   
  <section>
          <img src={value.avatar_url} />
          <h1>{value.bio}</h1>
          <h6>{value.followers}</h6>
  </section>
  )
}

export default State