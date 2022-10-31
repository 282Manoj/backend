const fs =require("fs");

// fs.readFile("./sampleFile.txt");
fs.readFile("./sampleFile.txt","utf-8",(err,data)=>{
    console.log(data);
});