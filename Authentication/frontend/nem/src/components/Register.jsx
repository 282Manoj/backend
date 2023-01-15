import React from "react";
import { useState } from "react";

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [age,setAge]=useState("");

    const handleSubmit=()=>{
        const payload={
            name,
            email,
            pass,
            age
        }
        fetch("http://:localhost:8080/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/josn"
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

  return (
    <>
      <div>Registration Page</div>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" value={pass} onChange={(e)=>setPass(e.target.value)} />
      <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export { Register };
