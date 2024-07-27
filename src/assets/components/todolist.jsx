import React from 'react'
// import { List } from 'antd'

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