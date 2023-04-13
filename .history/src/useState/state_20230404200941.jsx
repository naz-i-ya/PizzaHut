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

const removeItem = (id) => {
  console.log(id);
const item  = people.filter((itm) => itm.id !== id)
console.log(`${id}`, "remove", item)
}



  return (
    <div>
    <h1>test</h1>
    {
      people.map((p) => {
        const {id, name, relation} = p
        return(
          <>
          <ul key={id}>
            <li>{name}</li>
            <li>{relation}</li>
            <button onClick={() => removeItem(id)}>removeItem</button>
          </ul>
          
          </>
        );
      })
    }
    <button onClick={() => setPeople([])}>Delete item</button>
    </div>
  )
}

export default State