const express =require("express");
const auth=(req,res, next)=>{
    if(
        req.body && req.body.username==="Ritesh"&& req.body.password=="123"
    ){
        next();
    }
    else{
        res.send("Not authenticated");
    }
}

const app = express.Router();

app.get("",(req,res)=>{
    res.send("Get all users");
});

app.get(":id",(req,res)=>{
    res.send("Get one user");
});

app.get("/login",(req,res)=>{
    res.send("Authenticated");
})
module.exports=app;