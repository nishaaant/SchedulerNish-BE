require("dotenv").config();
const express = require("express");
const cors = require("cors");


//importing route
const {router} = require("./routes/mailRouter")

const app = express();

app.use(cors());
//parsing json data here - data will first enter here
app.use(express.json());

app.use("/",router);

const {PORT} = process.env;

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})