import axios from "axios";
import { ADD_TODO,DELETE_TODO,UPDATE_TODO,GET_TODO} from "./todo.types";

export const getTodos =  () => async (dispatch,state) =>{
    let response = await axios.get("http://localhost:3000/todos");
    let data = response.data;
    dispatch({
        type:GET_TODO,
        payload:data,
    })
  
}

export const addTodo = (payload) => ({type:ADD_TODO,payload: {
    id:Date.now(),
    ...payload,
}
});
export const updateTodo = (payload) => ({type:UPDATE_TODO,payload});
export const deleteTodo = (payload) =>({type: DELETE_TODO,payload});