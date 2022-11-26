const express = require('express');
const multer = require('multer');
const path =require('path'); 
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));


const upload = multer({
     storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            console.log("filename : ", req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.id+ ext; 
            done( null,filename); 
        }
     })

});

app.get("/file", (req,res)=> {
    res.render("file2");
});

app.post("/upload-single", upload.single("userfile"),(req,res) => {
    console.log( req.file );
    // res.send( "가입완료");
    res.render("img", { img: req.file.path});
});

//multer쓸때는 req.file임 파일업로드라서 req.file임 그리고 render임 이거는 비동기라서 페이지가 넘어가서 새로운걸 보여줘야되니까
// html파일?코드를?불러와야돼서 render하는거고 동적방식에서는 그냥 클라이언트한테 요청?인거 반응하면 되는거여서 send로 하면됨 그래서 index3.js에서는
//multer써도 send쓰는거임 
// req.body아님. { img: req.file.path}에서 path는 터미널에나온 path를 그대로가져오는거임 이거 img.ejs파일에서 path뒤에있는 주소가그대로들어감




app.listen(port, () => {
    console.log("server open :", port);
});