const express = require("express");
const session = require("express-session");
const app = express();
const port= 8000;
//세션

app.use(session({  //세션을 사용할 미들웨어
    secret: '1234',  //임의의 문자열을 가지고 세션을 암호화하겠다 
    resave: false,//true: 모든 요청마다 session에 변화가 없어도, session을 다시 저장함.
    saveUninitialized: true //초기화되지 않은 세션을 저장하나 마냐 
    // cookie: {//여기서부터 cookie랑 secure은 써도되고 안써도됨 //session id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge:  },    
    // secure: //true일 경우엔 보안서버에서만 작동

}))


app.get("/", (req, res)=> { 
    //if(req.session.user)에 정보가 있으면 로그인한사람. 저게없으면 로그인을 안한사람. req.session.user에서 user의 정보가 있으면 세션에 저장됐다는 뜻이니까 로그인임.
    if(req.session.user) res.render("index", {isLogin : true})  //이 isLogin의 버튼이 트루일경우엔 로그인ㅇ버튼을 보여주고 islogin이 false일때는 로그아웃버튼을 보여주고 이런식으로. req.session.user에 a가들어올거임
    else res.render("index", {isLogin : false})

    res.send("세션 수업");
});

app.get("/setSession",(req,res)=>{
    //cookies = { }객체형태.
    //req.session = { } 객체형태니ㅣ까 .user찍어서 원하는 이름 저장가능.
    req.session.user = "user";    //세션 만드는법//김미정써도됨. // req.session.user에서 user대신 다른거써도되는데 id는 쓰면안됨. 세션은 서버에저장됨. 근데 왜 req객체를 타는가? req는 클라이언트의 요청에의해서 발생하는거임. 클라이언트마다 고유 세션아이디를 가지고있음
    //그래서 서버는 그 세션아이디로 클라이언트를 구분하기때문에 그 세션아이디를 가져오기위해서 req.session으로 접근한느거임. req.session은 클라이언트가 가지고 있는 고유의방을 의미한다. 그래서 클라이언트를
    //타고와야되기때문에 req.쓴다는걸 잊어버리면안된다!!!!!
    res.send("세션 생성 성공"); //응답 
})

const user = {id:"a", pw:"1" };

app.post("/login",(req,res)=>{

    if(req.body.id== user.id && req.body.pw == user.pw) { 
        req.session.user = req.body.id; //세션만들기 내 공간(req.session)에 내 아이디를 저장한거임 user라는 키값에내 정보를 저장함. 
        res.send("로그인 성공")
    }
    else {
        res.send("로그인 실패");  //로그인성공에만 세션저장하고 실패에는 세션저장할 필요없음   //로그아웃버튼 눌렀을때 세션 삭제하는법은? app.destroy해서 엑시오스요청하거나 app.get해서 삭제url로 가거나
    }
    
})   //로그인 성공했는지 여부를 세션을 통해서 검증함. 아까 팝업여부는 쿠키에 저장하듯이 세션에선  세션에 로그인여부를 저장해야된다. 세션에 저장은 req.session.user="soyeon";이라는 식으로 

app.destroy("/logout", (req,res)=>{ //세션삭제법
    req.session.destroy(function(err){
        if(err) throw err;

        res.send("로그아웃 성공");
    })
})   //세션자체를 삭제해버린다 

app.listen(port, ()=>{
    console.log("server open", port);
});