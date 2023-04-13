import React from 'react'
import { useState } from 'react'

const data = {
    id: 1,
    name: 'Naziya',
    age: 25,
    hobby: 'code'
  }


  const State = () => {
    const [people, setPeople] = useState(0);
    console.log(people)

    const handleButton = () => {
    setTimeout(() => {
      setPeople( people + 1);
    }, 2000)
    }

  return (
   
    <div>
      <p>{people}</p>
          <button onClick={handleButton}>button</button>
        
   
    </div>
  )
}

export default State