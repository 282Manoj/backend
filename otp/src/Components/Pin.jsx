import React from 'react'
import { useState } from 'react';

const Pin = ({length}) => {
    const [inputBoxLength] = useState(new Array(length).fill(""));
  return (
    <div>
      {inputBoxLength.map((_,index)=>{
        return <input maxLength={1} key ={index}/>;
      })}
    </div>
  );
};

export default Pin
