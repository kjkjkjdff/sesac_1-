const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req,res){
    res.render("index");
})
app.get("/form", function(req,res){
    console.log(req.query);
    res.send("get - 이름은: "+ req.query.name);
    // res.send({msg:"이름은: "+ req.query.name});  이건 index.ejs파일이랑연결 
})

app.get("/form2", (req, res) => {
    res.render("form2");
})
app.get("/getForm2", (req, res) => {
    console.log(req.query);
    // res.send("회원가입 성공!");
    res.send({msg:req.query.name+"님 가입완료!" +req.query.gender });
})
// msg가 키값이니까 : 치고 그뒤에 이어서치기..  18번재줄이랑 21번째줄거는 짝으로 항상 같이해줘야되는데 get뒤에주소달라야됨 

app.post("/form", function(req,res){
    console.log(req.body);
    ///  if (req.body.id =="1" && req.body.pw =="1234") 
    ////임의로 1로 정하고 1ㅊ이면 성공 아니면 실패로
    res.send({msg:"post- 이름은: "+ req.body.name});
   
    //  res.send("이름은: "+ req.body.name); body맞나?s
   
})


app.listen(port, ()=>{
    console.log( "Server Port : ", port);
});