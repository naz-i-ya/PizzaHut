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



  return (
    <div>
    {
      people.map((p) => {
        return(
          <ul key={p.id}>
          <l1>{p}</l1>
        </ul>
        );
    
      })
    }
    </div>
  )
}

export default State