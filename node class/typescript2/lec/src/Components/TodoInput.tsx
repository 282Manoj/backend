import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';

type TodoInputProps ={
    onAdd:Function;
}

const TodoInput = (props:TodoInputProps) => {
    const {onAdd} = props
    const [value,setValue] = useState<string>("");
    const handleOnChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
    const handleSubmitEvent = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        onAdd(value);
        setValue("");

    }
  return (
    <div>
      <form onSubmit={handleSubmitEvent}>
        <input type="text"value={value} onChange={handleOnChange}/>
        <button type="submit">Add</button>

      </form>
    </div>
  )
}

export default TodoInput
