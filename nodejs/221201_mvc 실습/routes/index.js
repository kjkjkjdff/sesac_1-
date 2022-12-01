var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/form4", controller.login)

router.post("/form5", controller.loginPost)


module.exports = router;  //어디선가 이걸 불러왓을때 이걸 exports해주겠다. 최상위 index.js에서 이 파일을 불러왔으니까
//최상위 index.js에서  const router =require("./routes");해서 모듈로 불러왔으니까 
//여기에서도 exports해줘야됨  여기서 정의한 router가  최상위 index.js의  const router에 담긴다. 

//router에 express.router라는 함수 저장.
//