var express = require("express");
var controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); //모든 라우터에대한 정의를 여기에 넣겠다 . 원하는 라우터 만들기. 

router.get("/test", controller.test); //겟 여러개와도되는데 함수는 달라져야됨. test함수.
router.post("/postForm", controller.post); //컨트롤러에있는 포스트라는 함수 
//controller.test이런형식이 controller가 객체라는거고 그래서 cmain.js에서 exports하는 형식이..
//여기있는 함수들은 cmain.js안에 정의돼있는 함수여야됨 



module.exports = router;  //어디선가 이걸 불러왓을때 이걸 exports해주겠다. 최상위 index.js에서 이 파일을 불러왔으니까
//최상위 index.js에서  const router =require("./routes");해서 모듈로 불러왔으니까 
//여기에서도 exports해줘야됨  여기서 정의한 router가  최상위 index.js의  const router에 담긴다. 

//router에 express.router라는 함수 저장.
//