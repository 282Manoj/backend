import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBooks } from "../Redux/AppData/action";
import { patchBook } from "../Redux/AppData/action";
const EditBook = () => {
  const { id } = useParams();
  const books = useSelector((store) => store.AppReducer.books);
  const [current, setcurrent] = useState({});
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
 const navigate=useNavigate();

  useEffect(() => {
    if (books.length == 0) {
      dispatch(getBooks());
    }
  }, [books.length, dispatch]);

  useEffect(() => {
    if (id) {
      const book = books.find((item) => item.id === Number(id));
      book && setcurrent(book);
      book && setTitle(title);
    }
}, [id, books]);

useEffect(()=>{
},[])

const handlePatch=()=>{
    dispatch(patchBook(id,title)) 
    dispatch(getBooks())
    
        navigate(`/books/${id}`)
  }
  return <div>

    <input type="text" value={title} onChange={(el)=>setTitle(el.target.value)} />
    <button onClick={handlePatch}>Updata Title</button>
  </div>;
};
export default EditBook;
