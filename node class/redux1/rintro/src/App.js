import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment,addTodo } from "./redux/actions";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const { count, todos } = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>DEC</button>
        <button onClick={() => dispatch(increment())}>INC</button>
      </div>

      <div>
        {todos.map((todo,index)=>(
          <div key={index}>{todo}</div>
        ))}
        <div>
          <input onChange={({ target }) => setValue(target.value)} />
          <button onClick={() => dispatch(addTodo(value))}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
