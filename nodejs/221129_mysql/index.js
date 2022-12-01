const express = require("express");
const mysql = require("mysql"); //모듈이라서 맨위로.
const app = express();
const port = 8000;
y

const cnn = mysql.createConnection({
        host: 'localhost',  
        user: 'user',  
        password: '5245',   //mysql비번
        database: 'sesac_test'   
}) 



app.set('view engine','ejs');

// app.get('/',(req, res)=>{
//     cnn.query('select * from user', (err, result)=>{
//         if (err) throw err; //console.log(err);라도 써도되는데 throw err만 써도 찍힘 
  
//         console.log(result); //에러가 발생하지않는경우 결과값이 찍힌다. 
//         res.render("index", {rows: result}); //키는 rows인데암거나써도됨...
//   });
// });


app.get('/',(req, res)=>{
    cnn.query('insert into user(ID, name, age) values("h","홍홍홍",80),("z","홍홍홍",80);', (err, result)=>{
        if (err) throw err; //console.log(err);라도 써도되는데 throw err만 써도 찍힘 
  
        console.log(result); //에러가 발생하지않는경우 결과값이 찍힌다. 
        res.render("index", {rows: result}); //키는 rows인데암거나써도됨

     });
});

// 안에         //'insert into user(ID, name, age) values("h","홍홍홍",80),("z","홍홍홍",80);' 한번에 두개넣는법. mysql켜서 똑같이 써도 됨!ㅋㅋ
app.listen(port, ()=>{
    console.log("open:", port);
})