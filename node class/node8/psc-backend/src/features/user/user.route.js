const express = require("express");
const User = require("./user.model");
const app = express.Router();
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log()
  let user = await User.findOne({ email });
  //   console.log(user);
  try {
    if (user) {
      if (password === user.password) {
        res.send({
          token: `${email}_#${user._id}_$_${password}`,
          user,
        });
      } else {
        res.status(401).send("Authentication Failure,incorrect,password");
      }
    } else {
      res.status(404).send(`user with email: ${email} not found`);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name, age } = req.body;
  try {
    let existingUser = await User.findOne({email});
    if (existingUser) {
      res.status(404).send("Cannot create an user with existing email");
    }
    else{
    
      let user = await User.create({
         email,
         password,
         name,
         age,
         });
      res.send({ token: `${user.email}_#_${user.password}` });
        }
        
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = app;
