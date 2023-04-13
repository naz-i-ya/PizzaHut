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
    const [people, setPeople] = useState(data)

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
  setPeople({...people}, name, age, hobby);
}
const handleChange = (e) => {
  console.log(e.target.value);
}
  return (
    <div>
    <h1>{name}</h1>
   
    </div>
  )
}

export default State