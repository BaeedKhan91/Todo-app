import React from 'react'
import './todoinput.css'

function Todolist(props) {
  return (
    <>
    <li className="list-items">
        {props.item}
       
    </li>
   
  </>
  )
}

export default Todolist