const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get("/", controller.visitor); //컨트롤러에 비지터라는 함수를만들겠다 //localhost:8000/visitor
router.post("/register", controller.register);   //이거기본미들웨어 visitor로해놔서 이건 visitor/register라는 뜻임
//localhost:8000/visitor/register

//여기에서 cvisitor.js에 안만들어둔 함수쓰면 오류뜸 .만들어져있는 함수만 써야됨.
router.delete("/delete", controller.delete)
//localhost:8000/visitor/delete
router.get("/get_visitor",controller.get_visitor_by_id);
router.patch("/update", controller.update_visitor);
module.exports = router;  