import { LOGIN, LOGOUT } from "./auth.types";
let token = localStorage.getItem("token");
// console.log(token)
const initialState = {
    isAuth:!!token,
    token:token,
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                isAuth: true,
                token: payload,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false,
                token: "",
            };
        }
        default: {
            return state;
        }
    }
};
