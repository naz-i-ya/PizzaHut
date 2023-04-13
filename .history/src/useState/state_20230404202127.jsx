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
}
  return (
    <div>
    <h1>test</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' />
      <input type="number" name='age' />
      <input type="text" name='hobby' />
      <button>Submit</button>
    </form>

    </div>
  )
}

export default State