//실습세션과제용//login.ejs랑 main.ejs랑 연결 
const express = require("express");
const session = require("express-session");
const app = express();
const port= 8000;
app.set("view engine", "ejs") //ejs불러오기
//세션
app.use("/static", express.static(__dirname+"/static"));

app.use(express.urlencoded({extended: true}));
app.use(express.json()); //바디불러오는거 두줄 

app.use(session({  
    secret: '1234',  
    resave: false,
    saveUninitialized: true 
}))

const user = {id:"a", pw:"1" };

app.get("/", (req, res)=> {
    console.log(req.session.user);
    if(req.session.user)                              //세션에 사용자있는지없는지 확인하는 코드
    res.render("main_answer", {isLogin : true, id: req.session.user });  //렌더페이지와함께 islogin값을 같이보낸다. //로그인됐는지 검증하는 코드 //여기에 무슨값이든나오면 로그인을한거임
    else res.render("main_answer", {isLogin : false }); 
});  //메인페이지 렌더

app.get("/login", (req,res)=>{
    res.render("login_answer");
})  //하이퍼링크로 들어가는거라서 겟//로그인페이지 랜더하는 라우터




app.post("/login", (req,res)=> {
    if(req.body.id == user.id && req.body.pw == user.pw){ //req.body에는 로긴 axios에있는 id.pw들어잇음
        req.session.user = req.body.id; //로그인성공하면 req.session이라는 방안에 user의 id를 담을거임 user라는 키로 id값을 넣을거임. //로그인되나 확인하기 //로그인후에 다시메인페이지가면 ㅇㅇ님환영합니다,로그아웃버튼이 나와야됨
        res.send(true);
    } else {
        res.send(false);
    }
    req.body                      
}) 

app.get("/logout", (req, res)=>{  //로그아웃은 동적폼전송 엑시오스하든 하이퍼링크하든 상관없음 하이퍼링크는 겟요청임.
    req.session.destroy(function(err){
        if(err) throw err;
        res.redirect("/");
   })  
})

app.listen(port, ()=>{
    console.log("server open", port);
});