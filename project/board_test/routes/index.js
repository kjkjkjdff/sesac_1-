const express = require("express");
const user = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", user.index);
// router.get("/get_data", user.get_data);

router.get("/write", user.write);
router.post("/write", user.write_data);
module.exports = router;