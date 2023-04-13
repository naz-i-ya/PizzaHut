import React from 'react'

const Helmet = (props) => {
  document.title = "Pizza Hut -" + props.title
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet