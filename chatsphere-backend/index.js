const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")


const app = express();
require("dotenv").config();

// middleware
app.use(cors())

app.use(express.json());

app.use("/api/auth", userRoutes)

//connect mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTION IS SUCCESSFUL")
}).catch((err) => console.log(err.message))


const server = app.listen(process.env.PORT, () => {
    console.log(`server is up and running on ${process.env.PORT}`)
})