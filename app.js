const express = require("express");

//importing route
const {router} = require("./routes/mailRouter")

const app = express();

//parsing json data here - data will first enter here
app.use(express.json());

app.use("/",router);

app.listen(1608,()=>{
    console.log(`App is listening on port 1608`);
})