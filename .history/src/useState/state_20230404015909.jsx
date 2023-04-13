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
    
    </div>
  )
}

export default State