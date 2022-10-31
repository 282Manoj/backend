import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../redux/todo/todo.actions";
const TodoApp = () => {
  const [value, setValue] = useState("");
  const todos = useSelector((store) => store.todo.todos);
  // console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(getTodos());
    }
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            onClick={() =>
              dispatch(
                updateTodo({
                  ...todo,
                  status: !todo.status,
                })
              )
            }
          >
            {todo.name} - {todo.status ? "Completed" : "Not Completed"}
          </div>
          <div>
            <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
          </div>
        </div>
      ))}
      <div>
        <input
          vlaue={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                name: value,
                status: false,
              })
            );
            setValue("");
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
