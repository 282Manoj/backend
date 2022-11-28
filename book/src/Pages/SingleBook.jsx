import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import BookCard from "../compontes/BookCard";
import { getBooks } from "../Redux/AppData/action";


const SingleBook=()=>{
    const {id}=useParams();
    const books=useSelector((store)=>store.AppReducer.books );
    const [current,setcurrent]=useState({});
    const dispatch=useDispatch();
  console.log("current",current)
    useEffect(()=>{
        if(books.length==0){
            dispatch(getBooks())
        }
    },[books.length,dispatch])

    useEffect(()=>{
        if(id){
           const book=books.find((item)=>item.id===Number(id));
           book && setcurrent(book);
        }
    },[id,books,current])

    return (
        <div>
            <BookCard BookData={current}/>
        </div>
    )
}
export default SingleBook