const Test = require("../model/Test");
//test.js를 모듈로 불러오겠다. 

exports.login = (req,res)=>{
    res.render("app");
}



exports.loginPost = (req,res) => {
    console.log(req.body);
    //  var id = "id";  
    //  var password = "password"; 이거없어도됨

    var info = Test.test();
    if (req.body.id == info.id && req.body.pw == info.pw ){ 
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else { res.send("<p style='color:red'>로그인 실패</p>");}

   
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

//module.exports=router;하면 const router =require("./routes");여기에서 reuqire부분에 들어가는데.