const express = require("express");
const router = express.Router();
const test = require("../controller/mailSender").test;

router.post("/", test);

module.exports = router;