const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 6969;
const indexRouter = require("./Router/index");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Successfull");
} catch (error) {
    console.log(error);
}

app.use("/api", indexRouter);
app.get("/", (req, res) => {
    res.send("Server Is Running");
});




app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})