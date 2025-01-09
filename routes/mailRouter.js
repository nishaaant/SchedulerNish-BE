const express = require("express");
const { mailController } = require("../controllers/mailController");
const { validation } = require("../middlewares/validation");

const router = express.Router();

router.post("/sendemail" , validation , mailController);
module.exports = {router};