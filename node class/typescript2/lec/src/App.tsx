import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <div className="App">
     <Counter/>
     <TodoApp/>
    </div>
  );
}

export default App;
