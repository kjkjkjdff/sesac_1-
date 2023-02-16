const Test = require("../model/Test");
//test.js를 모듈로 불러오겠다. 

exports.main = (req, res) => {
    let hi = Test.hello();  //test.js에서 만들어둔 테스트헬로함수를 불러오는거임. 거기의 헬로라는 문자열이 여기 hi에 담길거임 
    res.send(hi); //hi에 헬로라는 문자열들어감
    // res.render("index");
} 
//index.ejs렌더 
exports.test = (req, res) => {
    
    res.send("test");
}

exports.post = (req, res) => {
    
    res.send("post");
}

//그냥 exports랑 module.exports랑 차이?
// module.exports = {
//       main: main, //메인이라는 함수
//       test: test, //키
//       post:post   
// }
// //이런식으로 객체형식으로 따로따로 나가는것이라서 index파일에서 var controller = require("../controller/Cmain"); 이런식으로 받아주면됨
//router.get("/", controller.main); //모든 라우터에대한 정의를 여기에 넣겠다 . 원하는 라우터 만들기. 

// router.get("/test", controller.test); 
// router.post("/postForm", controller.post); 이렇게 개별적으로 불러온다...(?)

//module.exports=router;하면 const router =require("./routes");여기에서 reuqire부분에 들어가는데..