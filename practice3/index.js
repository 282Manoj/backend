const express =require("express");
const app =express();
const {connection} =require("./config/db");
const {userRouter} =require("./routes/user.route")

app.use(express.json());
app.use("/user",userRouter)

app.get("/", (req,res)=>{
    res.send("home page");
})

app.listen(4300,async()=>{
try{
    await connection;
    console.log("database connected");
}
catch(err){
    console.log(err);
}
   console.log("server is runnning on port 4300")
})
