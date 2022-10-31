
import {INC,DEC,ADD_TODO} from "./actionTypes";

export const increment=(value=1)=>({type:INC,payload:value});

export const decrement=(value=1)=>({type:DEC,payload:value});
export const addTodo=(payload)=>({type:ADD_TODO,payload})