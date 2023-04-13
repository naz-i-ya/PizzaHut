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

const removeItem = () => {
  const rmvItem = people.filter((item) => {
item !== item.id
  });
  console.log(rmvItem, "REMMOVE");
  setPeople(removeItem);
}

  return (
    <div>
    <h1>test</h1>
    {
      people.map((p) => {
        const {id, name, relation} = p
        return(
          <>
          <ul key={p.id}>
            <li>{name}</li>
            <li>{relation}</li>
            <button onClick={removeItem}>removeItem</button>
          </ul>
          
          </>
        );
      })
    }
    <button>Delete item</button>
    </div>
  )
}

export default State