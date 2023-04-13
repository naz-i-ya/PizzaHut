import React from 'react'
import { useState } from 'react'

const data = [{
    id: 1,
    name: 'Naziya',
    age: 25,
    hobby: 'code'
  }
];

  const State = () => {
    const [people, setPeople] = useState(data);
    console.log(people)

  return (
   
    <div>
       {
        people.map((item) => {
          const {id, name, hobby, age} = item;
          return(
            <>
            <h1>{name}</h1>
            <p>{hobby}</p>
            <h6>{age}</h6>
            </>
          )
        })
       }
   
    </div>
  )
}

export default State