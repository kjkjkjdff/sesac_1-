const express = require('express');
const multer = require('multer');
const path =require('path'); //패스모듈불러오기 
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const upload = multer({
//     dest: "uploads/"
// });

const upload = multer({
     storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/'); //업로드폴더로 만들겠다(?)
        },
        filename(req,file,done){
            console.log("filename : ", req.body);
            const ext = path.extname(file.originalname);//바나나.jpg면  //저거 file.originalname은 터미널밑에있는 정보가져온거임 filedname,encoding이런거 
            const filename = req.body.name+ ext; //121333.jpg라고 들어옴-->이건 req.body.name대신 date.now()+ext;일때얘기임
            //이거를 그뒤에있는걸 req.body.name2 이렇게 바꾸면 name2로하면 언디파인드라고뜸 //file.ejs랑 연결된파일

            done( null,filename); //파일이름을 저걸로 설정하겠다
        }
     })

});
//storage는 멀터로 저장할공간을 설정 done은 에러가있을때 에러를 받음   origianl네임은 클라이언트가올린거.

// const filename = Date.now()+ ext; 
// const filename = req.body.name+ ext; 
// //밑에거는 이름직접지ㅇ정 이름직접지정하고싶으면 파일ejs의 userfile보다위에있는 name으로해양됨. 그뒤에있는걸 req.body.name2 이렇게
//name2로하면 언디파인드라고뜸 

app.get("/file", (req,res)=> {
    res.render("file");
});

app.post("/upload-single", upload.single("userfile"),(req,res) => {
    console.log( req.file );
    res.send( "Upload Complete" );
});
// upload.single은 넥스트까지알아서실행되는 함수임. req.file에 정보를 담아서 보내줌 req.file을멀터가만든다.

app.post("/upload-array", upload.array("userfile"),(req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});
// 하나의 인풋에 여러파일업로드가능

app.post("/upload-fields", upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});

app.get("/",test, test2, (req,res)=> {
    console.log("req.name : ", req.name);
    console.log("Hello");
    res.send("Hello");
});
// 슬래시라는 경로에 접속했을때 클라이언트가 슬래시라는 경로요청했을때 테스트를 실행하고 그다음에 헬로출력하는 함수를 실행시키겠다
function test(req,res,next){
    req.name= "12345";
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); //test미들웨어 함수가 끝났고, 그다음을 진행해라 그다음에 res.send헬로. next();를 써줘야 다음동작이 실행됨 
}
function test2(req,res,next){
    console.log("test2 함수입니다");
    next();
}

app.listen(port, () => {
    console.log("server open :", port);
});


//get이랑 get두개로 짝이루면 같은메소드 쓰는거니까 url주소를 다르게 해야되는데
//get이랑 post를 쓰는경우는 url같아도 달라도 상관없음!
//동적인것도 겟겟/ 겟 포스트/ 비동적인것도 겟겟 /겟 포스트식으로 가능함
//동적인건 한페이지에 결과나오게하는건데 겟/포스트 메소드 둘다 써도됨 