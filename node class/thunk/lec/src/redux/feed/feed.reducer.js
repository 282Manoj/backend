 import {GET_FEEDS} from "./feed.types"

const initialState ={
 feeds:[],
};

export const feedReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case GET_FEEDS: {
         return {
            ...state,
            feeds:payload,
         }
        }
    default: {
        return state;
    }
    }
}