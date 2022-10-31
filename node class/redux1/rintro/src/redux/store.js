import { legacy_createStore,compose } from "redux";

import { reducer } from "./reducer";

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;


export const store =legacy_createStore(reducer,createComposer());