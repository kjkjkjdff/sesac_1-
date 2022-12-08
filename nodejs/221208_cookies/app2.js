const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port= 8000;


app.use(cookieParser());
app.set('view engine', 'ejs') //npm install ejs


app.get("/", (req,res)=>{
    if(req.cookies.popup == "1") res.render("index", {popup: "none"});
    else res.render("index", {popup: "block"});
    //req.cookies.popup 의 데이터를 가져왔을때  1이아니면(다른데이터가뜨면)오늘하루열지않음을 클릭하지않았단느거니까 팝업을 보여줘야된다는거임 
    // 값을 비교해서 1이 아니면
     //1이 아니면 "none"을 보내고 (???)
     //내생각:1이면 none 1아니면 display
    // if(req.cookies.popup !== 1 ) {res.render("index", {popup: "display"})}; //렌더할때 쿠키를 생성하는 일은 없음 
    // else {res.render("index", {popup: "none"})};
    
});

const option = { 
    httpOnly: true,
    maxAge: 30000,//60*60*24*1000, 
}

app.post("/setpopup", (req,res)=>{
    //1. 쿠키를 만든다. 오늘하루열지않음을 클릭했음을 구분하는 쿠키 생성..쿠키를만드는건 실질적 서버응답이아니다.(쿠키를 생성하는건 서버응답객체의 속성을 변환시켜주는거다 헤더를 변경시킨거다)
    // {popup:1} 오늘열지않는걸 팝업으로 만들었다고치고 
    //2. res.send나 res.render나 res.sendfile이런걸로 실질적으로 서버응답을 해야된다. 
    
    res.cookie("popup","1", option);  //1말고 none이나 다른걸로 정해도됨
    res.send(true);
})







app.listen(port, ()=>{
    console.log("server open", port);
});