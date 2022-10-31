import {legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import {counterReducer} from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

const createComposer =window.__REDUX_DEVTOOLS_EXTENSION__ || compose ;

const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});

const logger =(state)=>(next)=>(action)=>{
    // console.log(state);
    console.log("action",action,typeof action);
    if(typeof action === "function"){
        return action(state.dispatch,state.getState);
    }
    return next(action);
}
export const store = legacy_createStore(rootReducer,applyMiddleware(logger));
