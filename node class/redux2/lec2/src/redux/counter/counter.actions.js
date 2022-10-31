import {INC,DEC} from "./counter.types";

export const decrement=()=>({type:DEC});
export const increment=()=>({type:INC});