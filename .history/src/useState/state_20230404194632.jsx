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
console.log(data);


  return (
    <div>
    <h1>test</h1>
    {
      people.map((p) => {
        return(
          <>
          <ul key={p.id}>
            <li>{p.name}</li>
            <button>removeItem</button>
          </ul>
          <button>Delete item</button>
          </>
        );
      })
    }
    </div>
  )
}

export default State