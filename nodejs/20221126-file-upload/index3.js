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
           const filename = req.body.name+ ext;

           done( null,filename); 
       }
    })

});

app.get("/file", (req,res)=> {
    res.render("file3");
});

app.post("/dynamicFile", upload.single("userfile"),(req,res) => {
    console.log( req.file );
    console.log(req.body);
    // res.send( "가입완료");
    res.send({path: req.file.path});
});

//이건 동적방식이라서 res.send쓰는거임 클라이언트한테 보여준다(?)...render는 파일 불러오는거라 비동적방식에서..
// req.body아님. { img: req.file.path}에서 path는 터미널에나온 path를 그대로가져오는거임 이거 img.ejs파일에서 path뒤에있는 주소가그대로들어감




app.listen(port, () => {
    console.log("server open :", port);
});