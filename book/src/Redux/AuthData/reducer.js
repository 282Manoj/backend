import * as types from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case types.USER_LOGIN_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export {reducer};