const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


const router =require("./routes");
app.use('/', router); //미들웨어등록하는거 



app.listen(port, ()=>{
    console.log( "Server Port : ", port);
});

