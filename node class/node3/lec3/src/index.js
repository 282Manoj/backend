const fs = require("fs");
const express = require("express");
const postRoutes=require("./router/post.router");
const ProductsRoutes=require("./router/products.router")
const app = express();
app.use(express.json());

app.use("/posts",postRoutes)
app.use("/products",ProductsRoutes);
app.get("/", (req, res) => {
  res.send("Hello,This is Manoj");
});

app.listen(8080, () => {
  console.log("Listening...");
});
