import React from 'react'
import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoItem from "./TodoItem";


type Todo ={
    id:number;
    content:string;
    isCompleted:boolean;
}
const TodoApp = () => {
    const [todos,setTodos] = useState<Todo[]>([]);

    const addTodo = (newTodo:string)=>{
        setTodos([
            ...todos,
            {id:Date.now(),
                content:newTodo,
                isCompleted:false,
            }
        ])
    }
    const toggleStatus =(id:number)=>{
     let updatedTodos = todos.map((todo)=>{
        if(todo.id==id){
            todo.isCompleted = !todo.isCompleted
        }
        return todo;
     });
     setTodos(updatedTodos);
    }
    const deleteTodo =(id:number) => {
           let updatedTodos=todos.filter((todo)=>todo.id!==id);
           setTodos(updatedTodos);
    }
  return (
    <div>
      <TodoInput onAdd={addTodo}/>
      {todos.map((todo)=>(
      <TodoItem key={todo.id} {...todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodoApp
