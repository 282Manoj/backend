import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Delete, getBooks } from "../Redux/AppData/action";

const BookCard = ({ BookData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(Delete(BookData.id));
    dispatch(getBooks());
    navigate("/");
  };
  return (
    <div>
      <Link to={`/books/${BookData.id}`}>
        <img
          src={BookData.cover_photo}
          alt="imageBooks"
          width="100%"
          height="350px"
        />
      </Link>
      <div style={{width:"50%",margin:"auto"}}>

      <h3>{BookData.id}</h3>
      <h4>{BookData.book_name}</h4>
      <h6>{BookData.category}</h6>
      <h6>{BookData.release_year}</h6>
      <button onClick={() => navigate(`/books/${BookData.id}/edit`)}>
        Edit Book
      </button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
export default BookCard;
