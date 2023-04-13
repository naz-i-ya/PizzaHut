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
      Array.prototype.map((p) => {
        return(
          <>
          <h1>{p}</h1>
          </>
     
        );
    
      })
    }
    </div>
  )
}

export default State