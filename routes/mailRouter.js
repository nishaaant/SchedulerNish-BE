const express = require("express");
const { mailController } = require("../controllers/mailController");
const { validation } = require("../middlewares/validation");
const {authUser} = require("../utils/auth")

const router = express.Router();

router.post("/sendemail" , validation , mailController); //add authUser middleware if authentication needed
module.exports = {router};