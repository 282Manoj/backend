import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppData/action";
import BookCard from "./BookCard";
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const BookList = () => {
  const books = useSelector((store) => store.AppReducer.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchPrams] = useSearchParams();

  useEffect(() => {
    if (location || books.length === 0) {
      const sortBy = searchPrams.get("sort");

      const getBookParams = {
        params: {
          category: searchPrams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBookParams));
    }
  }, [books.length, dispatch, location.search]);

  return (
    <div>
      {books.length > 0 &&
        books.map((bookData) => {
          return (
            <BookCardWrapper key={bookData.id}>
              {" "}
              {/* <Link to={`/books/${bookData.id}`}> */}

              <BookCard BookData={bookData} />{" "}
              {/* </Link> */}
            </BookCardWrapper>
          );
        })}
    </div>
  );
};

const BookCardWrapper = styled.div`
  width: 300px;
`;

export default BookList;
