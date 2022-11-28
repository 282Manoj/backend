import React from 'react'
import {FcFullTrash} from "react-icons/fc";
type TodoItemProps = {
  id: number;
  content: string;
  isCompleted: boolean;
  toggleStatus: Function;
  deleteTodo: Function;
}
const TodoItem = ({ id, content, isCompleted, deleteTodo, toggleStatus }: TodoItemProps) => {
  return (
    <div>
      <div>
        <div >
          <span>{content}</span>
          ----
          <span onClick={() => toggleStatus(id)}>{isCompleted ? "Completed" : "Not Completed"}</span>
        <FcFullTrash onClick={()=> deleteTodo(id)}/>
      </div>
        </div>
    </div>
  )
}

export default TodoItem
