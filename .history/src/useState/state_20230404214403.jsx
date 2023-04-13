import React from 'react'
import { useState } from 'react'

const data = {
    id: 1,
    name: 'Naziya',
    age: 25,
    hobby: 'code'
  }


  const State = () => {
    const [people, setPeople] = useState(data);
    console.log(people)

    const hanndleChange = () => {
      setPeople({...people, hobby: 'Dev Loves Naz'});
    }

  return (
   
    <div>
      
            <h1>{people.name}</h1>
            <p>{people.hobby}</p>
            <h6>{people.age}</h6>
            <button onClick={hanndleChange}>Change</button>
        
   
    </div>
  )
}

export default State