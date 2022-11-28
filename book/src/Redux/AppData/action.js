import axios from "axios";
import * as types from "./actionType";

const getBooksRequest = () => {
  return {
    type: types.GET_BOOKS_REQUEST,
  };
};
const getBookSuccess = (payload) => {
  return {
    type: types.GET_BOOKS_SUCCESS,
    payload,
  };
};
const getBookError = () => {
  return {
    type: types.GET_BOOKS_ERROR,
  };
};

const getBooks = (params) => (dispatch) => {
  dispatch(getBooksRequest());
  return axios
    .get(`http://localhost:8080/books`, params)
    .then((res) => {
      dispatch(getBookSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBookError());
    });
};

const patchBook = (id,title) => (dispatch) => {
console.log("id",id,title)
  return axios
    .patch(`http://localhost:8080/books/${id}`, {
      book_name: title,
    })
    .then((res) => {
    //    getBooks()
    //    getBooks().then((el)=>console.log(el))
    })
    .catch((e) => {});
};

const Delete=(id)=>(dispatch)=>{
    return axios
    .delete(`http://localhost:8080/books/${id}`)
    .then((res) => {
    console.log( "res",res)
    })
    .catch((e) => {});
}

export { getBooksRequest, getBookSuccess, getBookError, getBooks, patchBook,Delete };
