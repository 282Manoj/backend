const express=require("express");
const { PracticeModel } = require("../config/db");

const userRouter=express.Router();

userRouter.get("/",async(req,res)=>{
    const {limit,page_no}=req.query;
    console.log(limit,page_no);
   const users=await PracticeModel.find().limit(limit).skip((page_no-1)*limit);
   res.send(users);
})

userRouter.post("/create",async(req,res)=>{
  try {
    const data=req.body;
    const user=new PracticeModel(data);
    console.log(user);
    await user.save();
    res.send("Added user")
  } catch (error) {
    console.log(error);
    res.send("somethng wrong");
  }
})

userRouter.patch("/edituser/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;

  try {
    await PracticeModel.findByIdAndUpdate({_id:ID},payload);
    res.send("update the data");
    // const user=new PracticeModel(data);
  } catch (error) {
    console.log(error);
    res.send({"err":"something went wrong"});
  }
})
userRouter.delete("/remove/:id",async(req,res)=>{
    const ID=req.params.id;

  try {
    await PracticeModel.findByIdAndDelete({_id:ID});
    res.send("delete the data");
    // const user=new PracticeModel(data);
  } catch (error) {
    console.log(error);
    res.send({"err":"something went wrong"});
  }
})

module.exports={
    userRouter
}