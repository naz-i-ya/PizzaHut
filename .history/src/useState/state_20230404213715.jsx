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

    const hanndleChange = () => {
      setPeople({name: 'Dev', hobby: 'Dev Loves Naz', age: 24});
    }

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
            <button onClick={hanndleChange}>Change</button>
            </>
          )
        })
       }
   
    </div>
  )
}

export default State