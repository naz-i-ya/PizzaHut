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

const removeItem = (id) => {
  console.log(id);
const item  = people.filter((itm) => itm.id !== id)
console.log(`${id}`, "remove", item)
setPeople(item);
}



  return (
    <div>
    <h1>test</h1>

    </div>
  )
}

export default State