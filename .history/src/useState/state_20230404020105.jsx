import React from 'react'
import { useState } from 'react'

const State = () => {
  const [people, setPeople] = useState({
    id: 1,
    name: 'Dev',
    relation:'husband'
  },
  {
    id: 2,
    name: 'Naz',
    relation: 'Wife'
  }
  );



  return (
    <div>
    {
      people.map((p) => {
        return(
          <>
           <ul key={p.id}>
          <l1>{p}</l1>
        </ul></>
        );
      })
    }
    </div>
  )
}

export default State