import * as types from "./actionType";
const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_BOOKS_SUCCESS:
      return { ...state, isLoading: false, books: payload };
    case types.GET_BOOKS_ERROR:
      return { ...state, isLoading: false, isError: true };
      // case types.PATCH_BOOK_SUCCESS:
      //   return {...state,}
    default:
      return state;
  }
};
export {reducer}