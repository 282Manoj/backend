import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../redux/auth/auth.action";

const Login = () => {
  const isAuth =useSelector((store)=>store.auth.isAuth);
  // const {state} = useLocation();
  // console.log(state);
  const navigate =useNavigate();
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };
 
  useEffect(()=>{
    if(isAuth){
      
        navigate("/posts")
    }
      else{
        navigate("/login")
      }
    
  },[isAuth]);

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
