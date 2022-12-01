const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/login2", controller.login); //로그인 페이지를 렌더하는것. get으로 해야됨!치고들어가니까. 컨트롤럴안에 로긴이라는 함수있고
//로긴이라는함수는 로그인페이지를 렌더한다.
router.post("/login", controller.loginPost);

router.post("/login2", controller.loginPost2);
//요청방법이다르면 유알엘똑같아도됨. 

module.exports = router;  //어디선가 이걸 불러왓을때 이걸 exports해주겠다. 최상위 index.js에서 이 파일을 불러왔으니까
//최상위 index.js에서  const router =require("./routes");해서 모듈로 불러왔으니까 
//여기에서도 exports해줘야됨  여기서 정의한 router가  최상위 index.js의  const router에 담긴다. 

//router에 express.router라는 함수 저장.
//