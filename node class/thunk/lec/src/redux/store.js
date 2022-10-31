import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { authReducer, } from "./auth/auth.reducer";
import { feedReducer } from "./feed/feed.reducer";
import { postReducer } from "./post/post.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    feed:feedReducer,
    post:postReducer,
});

 const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));