import React from 'react'
import { useState } from 'react'

const data = [{
    id: 1,
    name: 'Dev',
    relation:'husband'
  },
  {
    id: 2,
    name: 'Naz',
    relation: 'Wife'
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