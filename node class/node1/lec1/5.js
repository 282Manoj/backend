let  posts = require("./db.json");
const fs =require("fs");
console.log(posts);
posts.posts.push({id:1,message:"New Post"});
fs.writeFile("./db.json",JSON.stringify(posts),{encoding:"utf-8"},()=>{});