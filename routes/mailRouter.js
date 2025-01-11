const express = require("express");
const { mailController } = require("../controllers/mailController");
const { validation } = require("../middlewares/validation");
const {authUser} = require("../utils/auth")

const router = express.Router();

router.post("/sendemail" ,authUser, validation , mailController);
module.exports = {router};