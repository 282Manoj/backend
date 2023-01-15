const express=require("express");
const {NoteModel} = require("../models/note.model");
const noteRouter=express.Router();

noteRouter.get("/",(req,res)=>{
    res.send("All the notes");''
});

noteRouter.post("/create",async(req,res)=>{
    const payload=req.body;
    try {
        const new_note=new NoteModel(payload);
        await new_note.save();
           res.send("Created the note");
    } catch (error) {
        console.log(err);
        res.send({"msg":"something went wrong"});
    }
  
});

noteRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    const note =await NoteModel.findOne({"_id":id});
    const userID_in_note=note.userID;
    const userId_making_req=req.body.userID;
    try {
        if(userID_in_note!==userId_making_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
            await NoteModel.findByIdAndUpdate({"_id":id},payload);
            res.send("Updated the note");
        }
    } catch (error) {
        console.log(err);
        res.send("Updated the note");
    }
})
noteRouter.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  const note=await NoteModel.findOne({"_id":id});
  const userID_in_note=note.userID;
  const userId_making_req=req.body.userID
  try {
    if(userId_making_req!==userID_in_note){
        res.send({"msg":"You are not authorized"});
    }
    else{
        await NoteModel.findByIdAndDelete({"_id":id});
        res.send("Delete the note");
    }
  } catch (error) {
    
  }
    res.send("Deleted the note");
});

module.exports={
    noteRouter
}