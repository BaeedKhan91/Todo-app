import React,{ useState } from 'react'
import './App.css'
import Todoinput from './assets/components/todoinput.jsx'
import TodoList from './assets/components/todolist.jsx'


function App() {
const[listTodo,setListTodo] = useState([]);
let addList =(inputText)=>{
  setListTodo([...listTodo,inputText])
}

  return (
    <>
    <div className="main-container">
    <Todoinput addList={addList}/>
    <div className="list">
    <h2>Todo List</h2>
 
  {listTodo.map((listItem,i)=>{
      return(
        <TodoList key={i} item={listItem}/>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default App
