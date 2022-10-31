const express =require("express");
const app = express.Router();
app.get("",(req,res)=>{
    res.send("Products page");
});

module.exports=app;