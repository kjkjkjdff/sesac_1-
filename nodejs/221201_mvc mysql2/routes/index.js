const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.visitor); //컨트롤러에 비지터라는 함수를만들겠다 
router.post("/register", controller.register);   //이거기본미들웨어 visitor로해놔서 이건 visitor/register라는 뜻임
module.exports = router;  