const express =require("express");
const fs =require("fs");
const db=require("../db.json");

const app= express.Router();

app.get("/posts",(req,res)=>{
    let {name,messageMatch}=req.query;
    let posts=db.posts;
    if(name){
        posts=posts.filter((post)=>post.name==name);
    }
    if(messageMatch){
      posts=posts.filter((post)=>post.message.includes(messageMatch))
    }
    res.send(posts);
});

app.get("/", (req, res) => {
    
  res.send(db.posts);
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  let numId = Number(id);
  let post = db.posts.find((post) => post.id === numId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send(`Post with ID:${id} not found`);
  }
  res.send(post);
});

app.post("/", (req, res) => {
  db.posts.push({...req.body,id:Date.now()});
  fs.writeFile("./db.json", JSON.stringify(db), "utf-8", () => {
    res.send(db.posts);
  });
});

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  let numId = Number(id);
  let post = db.posts.filter((post) => post.id !== numId);
  db.posts=posts;
  fs.writeFile("./db.json",JSON.stringify(db),"utf-8",()=>{
    res.send("deleted successfully");
  })
});

app.patch("/", (req, res) => {
  res.send("This is a PATCH API");
});

module.exports=app;