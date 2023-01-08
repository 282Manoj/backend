import logo from './logo.svg';
import './App.css';
import Pin from "./Components/Pin";
import PropTypes from "prop-types";
import {useState} from "react";

function App() {
  const [pinInput,setPinInput] = useState("");
  return (
    <div className="App">
     <Pin length={5}/>
    </div>
  );
}

export default App;

Pin.propTypes = {
  length:PropTypes.number.isRequired,
};