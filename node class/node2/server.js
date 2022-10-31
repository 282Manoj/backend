// 3 
// 1 import 
const http = require("http");
const db=require("./db.json");
const fs =require("fs");

// 2: create
const server =http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
        if(req.method=="GET"){
            if(req.url=="/"){
                res.write("Hello, you are on homePage");
            }
            else if(req.url==="/products"){
                res.write(JSON.stringify(db.products));
            }
            else if(req.url="/users"){
                res.write(JSON.stringify(db.users));
            }
           
        }
        else if(req.method=="POST"){
            if(req.url=="/products"){
                //update products in db.json
                //he
                db.products.push({id:1,content:"new Product"});
                res.write(JSON.stringify(db.products));
            }
            else if(req.url=="/users"){
                //update users in db.json
                //here
                db.users.push({id:1,name:"name-1"});
                res.write(JSON.stringify(db.users));
            }
            fs.writeFileSync("./db.json","utf-8",JSON.stringify(db))
        }
    res.end();
})
// 3. listen/start
server.listen(8080,()=>{
    console.log("Listening on http://localhost:8080");
});