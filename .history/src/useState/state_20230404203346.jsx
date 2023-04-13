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
    <h1>{people.name}</h1>
   
    </div>
  )
}

export default State