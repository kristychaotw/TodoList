import React , { useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"

export default function Edit({setTodos}) {
    const todoNameRef=useRef()
    

    function handleAddTodo(e){
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos=>{
            return [...prevTodos, {id:uuidv4(), name:name, complete:false}]
        }) 
        todoNameRef.current.value = null
         
  }
  
    return (
    <>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}><Link to="">新增紀錄</Link></button>
      <hr></hr>
    </>
  );
}
