import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialSort=searchParams.getAll("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [sort,setSort]=useState(initialSort[0]||"");

  const handleSort=(e)=>{
setSort(e.target.value)
  }
  const handleCheckBox = (e) => {
    //check if the data is present in the category,
    const newCatogory = [...category];
    //if yes, then remove it (the user has an-checked the checkbox)
    if (newCatogory.includes(e.target.value)) {
      //remove it
      newCatogory.splice(newCatogory.indexOf(e.target.value), 1);
    } else {
      //else add it in hte category array
      newCatogory.push(e.target.value);
    }
    setCategory(newCatogory);
  };

  useEffect(() => {
    let params = {};
    params.category = category;
    sort&&(params.sort=sort);

    setSearchParams(params);
  }, [category, setSearchParams,sort]);
  return (
    <div>
      <h3>Filter Data</h3>
      <div>
        <div>
          <input
            type="checkbox"
            checked={category.includes("Novel")}
            value="Novel"
            onChange={handleCheckBox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleCheckBox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}

            onChange={handleCheckBox}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input type="checkbox"
           value="Thriller"     
       checked={category.includes("Thriller")}
 onChange={handleCheckBox} />
          <label>Thriller</label>
        </div>
      </div>
      <div>
        <h3>Sort Data</h3>
        <div onChange={handleSort}>
            <input type="radio" value={"asc"} defaultChecked={sort==="asc"} name="sortBy" />
            <label>Ascending</label>
            <br />
            <input type="radio" value={"desc"} defaultChecked={sort==="desc"} name="sortBy" />
            <label >Decending</label>
        </div>
      </div>
    </div>
  );
};
export default FilterComp;
