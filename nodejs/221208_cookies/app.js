const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port= 8000;
//쿠키
app.use(cookieParser());
//서버의 응답으로 쿠키만들어서보낸다 그래서res씀 
app.get("/", (req,res)=>{
    res.send("hello");

    // if (req.cookies.NM_POPOP) res.render("ejs파일명", { popup: "none"});
    // else {res.render("ejs파일명", {popup:"display"});}//이런식으로해서 if는 그만보기눌렀을때 else는 그냥 보기눌렀을때(?)
    // res.render("ejs파일명");  
});

// document.cookies  //브라우저만들고 스크립트태그안에이런걸 쓸수있다(?)

const option = { //밑에 옵션들 중에 원하는것만 써도됨 
    httpOnly: true, //브라우저상에서 이 옵션으로 생성한 쿠키에 대해서는 스크립트단에서는 document.cookies같은 걸적어서 접근가능한데 true로 쓰면 아무것도안나와서 접근안됨. 자바스크립트태그안에서 쿠키를 조적하는것을 막아준다는뜻임.
    //클라이언트가 document.cookie로 접근할수 없게하는 옵션임.
    maxAge: 30000, //만들어진 순간부터 앞에 적힌 초만큼 뒤에 만료됨 (ms단위라서 3000이면 3초) 테스트라는 쿠키는 만들어진순간부터 30초뒤에 만료된다. ex)30000->30초뒤에 만료 
    // expires: "2022-12-09T09:00:00", //GMT시간 2022-12-09T09:00:00 으로 만료날짜 지정. maxAge나 expires중에 하나쓰면됨.
    // path: "/visitor",  //localhost:8000에서는 쿠키가 없음. localhost:8000/visitor/~~~~ 의 경로에만 쿠키가 있을거다.물결에뭐가오든. default값은 "/"
    // secure: false //true라고 할 경우, https -> 보안서버에만 적용됨. false할거면 아예 secure안써도됨 
    // signed: true //쿠키를 암호화한다 default: false임
}
app.get("/set",(req,res)=>{ //http://localhost:8000/set
    //팝업창보지않기를 눌렀을때 set으로 온다치면
    //res.cookie("NM_POPOP", "1",option)써뒀으면  app.get("/",)위에처럼 if(req.cookies.NM_POPOP)res.render("ejs파일명)~else~res.sender("ejs파일명")이런식으로
    //팝업보기눌렀을때랑 아닐때를 나눌수있다!

    // res.cookie("key","value", 옵션객체);   //키랑 밸류는 맘대로 정해도됨."test","1"이런식. 옵션객체는 쿠키만료일 그런거. res.cookie("key","value", {});
    //저렇게써도되는데 위에 아예 옵션따로 변수로 빼소 정해도됨.
    res.cookie("test","1", option);  //쿠키를 만들때 서버에서 만들어서 보내줄수있다는건 서버의 응답임.그래서 res가 서버에서 클라이언트에게 보내는 응답
    //매개변수에 res객체를 써서 그안에 있는 쿠키라는 메소드를사용하는거임
    res.send("쿠키 생성 성공");
});

app.get("/get",(req,res)=>{ 
    
    console.log(req.cookies);
    console.log(req.cookies.test); //1나옴 
    res.send(req.cookies); //쿠키를 페이지에 객체형태로 보내준다. //쿠키를 만들때 서버에서 만들어서 보내줄수있다는건 서버의 응답임.그래서 res가 서버에서 클라이언트에게 보내는 응답
    //매개변수에 res객체를 써서 그안에 있는 쿠키라는 메소드를사용하는거임. 서버에서 쿠키를 가져올때는 ,쿠키는 브라우저가 가지고있음. req객체를 통해서 
    //쿠키에 접근해서 가져온다. 그래서 req.cookies임. 클라이언트에 저장돼있는걸가져오는거니까 req임 ! 쿠키는 브라우저가 가지고있기때문에 서버를 아무리껏다켜도 유지됨!
    //서버를 껏다켜는거랑 상관없다. 서버꺼도 브라우저의 쿠키에 접근가능하다 새고해도 쿠키나옴.
    
});

app.listen(port, ()=>{
    console.log("server open", port);
});