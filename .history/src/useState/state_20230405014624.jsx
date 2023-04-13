import React from 'react'
import { useState, useEffect } from 'react'

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
      console.log();
   setPeople(people + 1);
    }

    useEffect(() => {
      console.log('Hello');
      handleButton();
     })
     
 

  return (
   
    <div>
      <p>{people}</p>
          <button onClick={handleButton}>button</button>
        
   
    </div>
  )
}

export default State