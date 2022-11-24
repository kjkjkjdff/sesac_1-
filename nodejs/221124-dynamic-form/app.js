const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/form4", function(req,res){
    res.render("app");
})

app.post("/form5", function(req,res){
    console.log(req.body);
    //  var id = "id";  
    //  var password = "password"; 이거없어도됨
    if (req.body.id == "1" && req.body.pw == "1234" ){ 
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else { res.send("<p style='color:red'>로그인 실패</p>");}

   
})

// / var id = "1";  
// var password = "1234";
// if (req.body.id == "id" && req.body.pw == "password" ){ 
//    res.send("<p style='color:blue'>로그인 성공</p>");
// } else { res.send("<p style='color:red'>로그인 실패</p>");}


// }) 이건왜됨

app.listen(port, ()=>{
    console.log( "Server Port : ", port);
});

///이건 nodemon app.js켜야됨 