const express = require("express");
const Cart = require("./cart.model");
const User = require("../user/user.model");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    return res.send("Missing token");
  }
  let [email, password] = token.split("_#_");
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password == user.password) {
        req.userId = user.id;
        next();
      } else {
        res.status(401).send("Authentication Failure, incorrect password");
      }
    } else {
      res.status(401).send(`User with email: ${email} is not found`);
    }
  } catch (e) {
    rse.send(404).send(e.message);
  }
};

const app = express.Router();
app.use(authMiddleware);

app.get("/", async (req, res) => {
  try {
    console.log("hiii");
    let carts = await Cart.find({ user: req.userId }).populate([
      "user",
      "product",
    ]);
    console.log(carts);
    res.send(carts);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let cart = await Cart.create(req.body);
    res.send(cart);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
module.exports = app;
