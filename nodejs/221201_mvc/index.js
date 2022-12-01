const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false } ));
app.use(express.json());

const router =require("./routes");
app.use('/', router);
//require은 모듈 불러오겠다는거임 //상대경로로 저렇게 폴더까지 썼으면 그 안에있는 index.js를 알아서 찾음. 무조건.
//아니면 ("./routes/index")이렇게 파일명까지 자세히써야됨. index말고 다른 파일명도 됨. routes모듈불러와서 router라는 변수에넣음
//12번줄은  localhost: 8000/dfdfdf  
//localhost: 8000    이렇게와도 다 거기로 이동시키겠다는거임 

// app.get('*', (req, res)=>{
//     res.render('error');
// });
//ejs인 error페이지를 렌더한다 . *은 모든 라우터를 의미. 

app.get('*', (req, res)=>{
    res.send('주소가 존재하지 않습니다. 다시 한번 확인해주세요');
}); //이거는 모든 라우터 다 정의하고 마지막에 써야됨  이거의 윗줄들에있는 라우터에 없는 것들에 대해서는 이게뜰거다 404에러 핸들링.


app.listen(port, ()=> {
    console.log("server open: ", port);
});