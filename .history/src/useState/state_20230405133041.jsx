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
      setValue(result);
    }catch(err){
        console.log({err});
    }
  }

  fetchData();

},[])
 

  return (
   
  <section>
          <h4>Hello</h4>
  </section>
  )
}

export default State