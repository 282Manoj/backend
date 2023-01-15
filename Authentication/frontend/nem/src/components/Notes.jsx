import React, { useEffect } from "react";
import { useState } from "react";

const AllNotes= () => {
  const [notes,setNotes] =useState();
 useEffect(()=>{
    fetch("http://:localhost:8080/notes",{
        headers:{
            "Authorization":localStorage.getItem("token"),
        }
    }).then(res=>res.json())
    .then(res=>{
        setNotes(res);
        console.log(res)})
    .catch(err=>console.log(err));


 },[])
       
 const deleteNote=(noteID)=>{
    fetch(`http://localhost:8080/notes/delete/${noteID}`,{
        method:"DELETE",
        headers:{
            "Authorization":localStorage.getItem("token"),
        }
    })
 }

  return (
<>
<div> get all notes</div>
{
    notes?notes.map((ele)=>{
        return(<>
        <h2>Title:ele.title</h2>
        <h2>Title:ele.title</h2>
        <h2>Title:ele.title</h2>
        <button onClick={()=>deleteNote(ele._id)}>Delele</button>
        </>)
    }):<h1>No Notes</h1>
}

</>
  );
};

export { AllNotes };
