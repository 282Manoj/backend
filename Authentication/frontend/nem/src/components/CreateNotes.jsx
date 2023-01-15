import React from "react";
import { useState } from "react";

const CreateNote = () => {
    const [title,setTitle]=useState("");
    const [note,setNote]=useState("");
    const [category,setCategory]=useState("");

    const handleSubmit=()=>{
        const payload={
           title,
           note,
           category
        }
        fetch("http://:localhost:8080/notes/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/josn",
                "Authorization":localStorage.getItem("token"),
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

  return (
    <>
      <div>CreateNote</div>
      <input type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" placeholder="Enter Note" value={note} onChange={(e)=>setNote(e.target.value)} />
      <input type="text" placeholder="Enter Category" value={category} onChange={(e)=>setCategory(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export { CreateNote };
