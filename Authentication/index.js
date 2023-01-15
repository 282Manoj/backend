const express = require("express");
const { connection } = require("./configs/db");
const { UserRouter } = require("./Routes/user.route");
const { noteRouter } = require("./Routes/Note.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const cors =require("cors");
const app = express();
app.use(cors({
    origin:"*"
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("WelCome");
});

app.use("/users", userRouter);
app.use(authenticate);
app.use("/notes", noteRouter);


app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to the DB");
    } catch (error) {
        console.log("Trouble connecting to the DB");
    }
    console.log("running at 8080");
})