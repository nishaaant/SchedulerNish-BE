const express = require("express");
const { mailController } = require("../controllers/mailController");
const { validation } = require("../middlewares/validation");

const router = express.Router();

router.post("/sendemail" , validation , mailController , async (req , res) => {
    res.json({
        message : "Send Email Post Link ran Succesfully!"
    })
});
module.exports = {router};