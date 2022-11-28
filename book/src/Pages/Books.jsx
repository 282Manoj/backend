import BookList from "../compontes/BookList";
import FilterComp from "../compontes/FilterComp";
import styled from "styled-components";
const Books = () => {
  return (
    <div>
      <BookPagewrapper>
        <FilterWrapper>
          <FilterComp />
        </FilterWrapper>
        <BookWrapper>
          <BookList />
        </BookWrapper>
      </BookPagewrapper>
    </div>
  );
};

const BookPagewrapper = styled.div`
  display: flex;
  border: 2px solid red;
  gap: 10px;
`;
const FilterWrapper = styled.div`
width:20%;
border 1px solid blue
`;
const BookWrapper = styled.div`
width: 80%;
border: 1px solid green;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
grid-gap:10px;
justify-content: center;
`;
export default Books;
