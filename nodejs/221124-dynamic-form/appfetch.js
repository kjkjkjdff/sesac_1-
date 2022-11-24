const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/form4", function(req,res){
    res.render("appfetch");
})

app.post("/form5", function(req,res){
    console.log(req.body);

    if (req.body.id == "1" && req.body.pw == "1234" ){ 
        // res.send("<p style='color:blue'>로그인 성공</p>");
        res.send({msg:"<p style='color:blue'>로그인 성공</p>"});
        // 18번째줄처럼 문자열인경우는 json으로못받아서 fetch쓰려면 19번재줄처럼 msg:이런 키,데이터형식으로 한번감싸줘야됨
    } else {res.send({msg:"<p style='color:red'>로그인 실패</p>"});}
    // else { res.send("<p style='color:red'>로그인 실패</p>");}

   
})


app.listen(port, ()=>{
    console.log( "Server Port : ", port);
});

