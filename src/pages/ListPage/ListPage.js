import React , { useState, useEffect } from "react";
import Edit from "./components/Edit";
import ItemList from "./components/ItemList";


const LOCAL_KEY = "todoApp.todos"

export default function ListPage({handlePage}) {
  const [ todos, setTodos]=useState([])
  
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_KEY))
    console.log(storedTodos)
    if (storedTodos)  setTodos(storedTodos)
    },[])

  useEffect(()=>{
    console.log('todos in localStorage:',todos);
    localStorage.setItem(LOCAL_KEY,JSON.stringify(todos))
  },[todos])

  function deleteTodo(idInput){
    // const todo = newTodos.find(todo =>todo.id === id)
    const newTodos = todos.filter(todos => todos.id != idInput )
    console.log('newTodos ' ,newTodos);
    setTodos(newTodos)
  }

  function handleGoIndexClick(){
    handlePage("homePage")
  }

  return (
      <>
      <div><h2>My To-Do List</h2></div>
      <Edit setTodos={setTodos}/>
      <ItemList className="txt" todos={todos} deleteTodo={deleteTodo} />
      <hr></hr>
      <div className="txt"> {todos.filter(todo=>!todo.complete).length} Left to Do</div>
      <hr></hr>
      <button onClick={handleGoIndexClick}>返回首頁</button>
    </>
    )
}
