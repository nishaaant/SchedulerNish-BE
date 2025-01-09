const express = require("express");

const router = express.Router();

router.post("/sendemail" , async (req , res) => {
    res.json({
        message : "Send Email Post Link ran Succesfully!"
    })
});
module.exports = {router};