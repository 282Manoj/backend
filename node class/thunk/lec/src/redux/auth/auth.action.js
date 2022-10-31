import axios from "axios";

import { LOGIN, LOGOUT } from "./auth.types";

export const login = (creds) => async (dispatch) => {
    // console.log(creds);
    let response = await axios.post("https://reqres.in/api/login", creds);
    // console.log(response.data);
    dispatch({ type: LOGIN, payload: response.data });
}

export const logout = () => ({ type: LOGOUT })