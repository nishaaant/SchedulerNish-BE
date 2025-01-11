require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")


//importing route
const {authRouter} = require("./routes/authRouter")
const {router} = require("./routes/mailRouter");
const connectDB = require("./utils/mongoose");

const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
//parsing json data here - data will first enter here
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter)
app.use("/",router);

const {PORT} = process.env;

connectDB().then(()=> {
    console.log("Database connected!!")
    app.listen(PORT , () => {
        console.log("Server ran succesfully...");
    });
}).catch((err)=> {
    console.log("Database not connected!!")
})