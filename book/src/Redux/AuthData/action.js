import axios from "axios"
import * as types from "./actionType"

const login=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios
    .post("https://reqres.in/api/login",payload)
    .then((res)=>{
       
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data.token});

    }).catch((e)=>{
        dispatch({type:types.USER_LOGIN_ERROR})
    })
}
export {login}