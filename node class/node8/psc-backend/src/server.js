require("dotenv").config();
const express = require('express');
const cors = require("cors");

const connect = require("./config/db");
const userRoute = require("./features/user/user.route");
const productRuote = require("./features/product/product.route");
const cartRoute = require("./features/cart/cart.route");

const PORT =process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users",userRoute);
app.use("/products", productRuote );
app.use("/carts",cartRoute);

app.listen(PORT,async ()=>{
    await connect();
    console.log(`Listening at http://localhost:${PORT}`);
});
