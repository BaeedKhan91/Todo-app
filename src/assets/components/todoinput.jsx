import React, { useState } from 'react'
import { Button,Input } from 'antd'
import './todoinput.css'

function Todoinput(props) {
    const [inputText,setInputText] = useState('');
  return (
    <>
    <div className="input-container">
    <Input placeholder="Enter Your Todo"
    value={inputText}
    className='input'
    onChange={e=>{
        setInputText(e.target.value);
    }}
     />
   
    <Button type="primary" shape="circle" className='button' onClick={()=>{
        props.addList(inputText)
        setInputText("");
    }}>   
    +
  </Button>
  </div>
  </>
  )
}

export default Todoinput