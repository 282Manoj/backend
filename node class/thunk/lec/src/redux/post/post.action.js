import axios from "axios";
import { GET_POSTS } from "../post/post.types";

export const getPosts = ()=> async(dispatch)=>{
    let response =await axios.get("http://localhost:3004/posts");
    return dispatch({type:GET_POSTS,payload:response.data})
}