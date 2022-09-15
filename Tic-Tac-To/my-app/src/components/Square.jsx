import React from 'react'
import "../App.css"

function Square(props) {
  return (
    <div
    onClick={props.aClick}
     className='square'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square;