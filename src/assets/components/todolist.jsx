import React from 'react'
import './todoinput.css'

function Todolist(props) {
  return (
    <>
    <li className="list-items">
        {props.item}
        {/* <span><i className="fa-solid fa-trash"></i></span> */}
    </li>
   
  </>
  )
}

export default Todolist