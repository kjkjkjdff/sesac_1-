const express = require("express");
const user = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", user.index);


module.exports = router;