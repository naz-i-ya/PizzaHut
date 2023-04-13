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
const handleChange = (e) => {
  console.log(e.target.value);
}
  return (
    <div>
    <h1>test</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' onChange={handleChange} />
      <input type="number" name='age' onChange={handleChange} />
      <input type="text" name='hobby' onChange={handleChange} />
      <button>Submit</button>
    </form>
      {
        people.map((itm) => {
          const { id, name, age, hobby} = itm
          return(
            <table key={id}>
              <td>hii</td>
            </table>
          )
        })
      }
    </div>
  )
}

export default State