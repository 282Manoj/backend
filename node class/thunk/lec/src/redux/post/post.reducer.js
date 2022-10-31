import {GET_POSTS} from "./post.types";

const initialState ={
 posts:[],
};

export const postReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case GET_POSTS:{
            return {
                ...state,
                posts:payload
            }
        }
     default: {
        return state;
     }
    }
}