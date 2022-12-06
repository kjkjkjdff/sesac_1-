const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use('/visitor', router);
// localhost:8000/visitor~~~~

const userRouter = require("./routes/user");//이거 로그인페이지그거 열어주는거!
app.use('/user', userRouter); 


app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});