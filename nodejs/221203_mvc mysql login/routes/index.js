const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/login2", controller.login); 

router.get("/register", controller.register);
router.post("/register2", controller.register2);

module.exports = router;  
