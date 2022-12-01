const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


const router =require("./routes");
app.use('/visitor', router); //미들웨어등록하는거 localhost:8000/visitor 이라는 모든경로에 대해서 router에 들어올거임
//visitor가 포함돼있어야만 여기로 들어와짐 그래서 routes의 index.js파일에 router.get("/", controller.);해둔거는
//visitor뒤에 오는주소가 오는건데 / 라고해놔서 결국 걍 visitor/에 접속하면되는거임



app.listen(port, ()=>{
    console.log( "Server Port : ", port);
});

