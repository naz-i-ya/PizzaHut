import React from 'react'
import { useState } from 'react'

const data = [{
    id: 1,
    name: 'Naziya',
    relation:'Sis'
  },
  {
    id: 2,
    name: 'Naz',
    relation: 'Bro'
  },
];

  const State = () => {
    const [people, setPeople] = useState(data)
console.log(people);


  return (
    <div>
    <h1>{people.name}</h1>
    </div>
  )
}

export default State