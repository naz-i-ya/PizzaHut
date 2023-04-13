import React from 'react'

const Helmet = (props) => {
  document.title = "Pizza Hut -" + props.title
  return (
    <div>Helmet</div>
  )
}

export default Helmet