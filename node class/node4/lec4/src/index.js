const express = require("express");
const cors=require("cors");
const db=require("./db.json");

const PORT =8080;
const logger=(req,res,next)=>{
    console.log("Before", req.method,req.url)
    next();
    console.log("After",req.method,req.url);
};
const logger2=(req,res,next)=>{
    console.log("Before2", req.method,req.url)
    next();
    console.log("After2",req.method,req.url);
}

const auth=(req,res,next){
    if(req.body && req.body.username==="Manoj" && req.body.password=="123"){
        next();
        
    }
    else{
        res.send("Not Authenticated");
    }
}

const app= express();
app.use(cors());
app.use(auth)
app.use(logger);
app.use(logger2)
app.post("/",(req,res)=>{
    console.log("request",req.method,req.url)
    res.end();
})
app.get("/",(req,res)=>{
    console.log("request",req.method,req.url)
    res.end();
})

app.listen(PORT,()=>{
    console.log("Listening.....")
})