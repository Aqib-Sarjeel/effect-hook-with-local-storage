import React,{useState,useEffect} from "react";
import TodoForm from "./Components/TodosForm";
import Todos from "./Components/Todos";
import {Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';


import "./App.css";


const App = ()=>{
  const [todos,setTodos]=useState([])
  useEffect(()=>{

    const localtodos=localStorage.getItem("todos")
    if(localtodos){
      setTodos(JSON.parse(localtodos))
    }
  },[])
  const addTodos=async todo=>{
    setTodos([...todos,todo])
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const removeTodos =id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  return(
  <div>
    <Container type="fluid">
      <h1>Todo App With Local Sotorage:</h1>
      <Todos todos={todos} removeTodos={removeTodos}/>
    <TodoForm addTodos={addTodos}/>
    </Container>
  
  
  </div>
  )
}





export default App;


