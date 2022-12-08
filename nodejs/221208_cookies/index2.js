//실습세션과제용//login.ejs랑 main.ejs랑 연결 
const express = require("express");
const session = require("express-session");
const app = express();
const port= 8000;
app.set('view engine', 'ejs') 
//세션
app.use("/static", express.static(__dirname+"/static"));

app.use(express.urlencoded({extended: true}));
app.use(express.json()); //바디불러오는거 두줄 

app.use(session({  
    secret: '1234',  
    resave: false,
    saveUninitialized: true 
}))


app.get("/", (req, res)=> { 
    
    if(req.session.user) res.render("main", {isLogin : true})  //이 isLogin의 버튼이 트루일경우엔 로그인ㅇ버튼을 보여주고 islogin이 false일때는 로그아웃버튼을 보여주고 이런식으로. req.session.user에 a가들어올거임
    else res.render("main", {isLogin : false})

    
});

app.get('/login', (req, res) => {
    res.render("login");
})


const user = {id:"a", pw:"1" };

app.post("/login",(req,res)=>{

    console.log(req.body);
    if(req.body.id== user.id && req.body.pw == user.pw) { 
        req.session.user = req.body.id; 
        res.send("로그인 성공")
    }
    else {
        res.send("로그인 실패");  
    }
    
}) 

app.delete("/logout", (req,res)=>{
    req.session.destroy(function(err){
        if(err) throw err;

        res.send("로그아웃 성공");
    })
})   

app.listen(port, ()=>{
    console.log("server open", port);
});