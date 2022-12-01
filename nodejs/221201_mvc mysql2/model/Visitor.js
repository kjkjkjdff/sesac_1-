const mysql = require("mysql");

const cnn = mysql.createConnection({
        host: 'localhost',  
        user: 'user',  
        password: '5245',   
        database: 'sesac_test'  
}) ;
//mysql연결코드 

exports.get_visitor = (cb)=>{
    var sql = 'SELECT * FROM visitor';

    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log("visitors : ", rows);

        cb(rows);
        //그냥여기서 return rows; 하고 cvisiotr.js파일에서  let visiotr=Visitor.get_visitor()  res render("visitor",) 하면되지않냐 싶겠지만
        //자바스크립트는 비동기라서 시간이오래걸려서 차례대로 실행이안돼서 콜백함수로 써야됨 
    })
}

//실행시킨결과가 sql, (err, rows) 의 rows에 들ㅇ러감. cnn실행시켜서 결과값나온게 rows임 
//그리고 마지막에 cb(rows);를실행시킨다. 콜백함수가 console.log(result);
        // res.render("visitor", {data:result}); 이거임

        // cnn.query(sql, (err, rows) => { 이걸 시행하고 그 안에 들어온 if함수를 시행해서 결과로 콜백함수를 실행한다.
        //외우셈

exports.register_visitor = (info, cb) =>{
    //info=req.body; {name: , comment: } 인포는 객체다. req.body가 cvisitor.js파일의 16번째줄말하는거임.
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`; //sql문//이게 있어서 이름이랑 코멘트가 추가되는거임.이거때문에 sql에도 정보가 자동으로 업뎃되는거임. 아래쪽 함수랑 cvisiotr.js파일 에서15~18번째줄에서는 id만 추가되는거고..visiotr.ejs에 네임,코멘트추가하는게 있어서 네임,코멘트가 자동 추가되는거임.
    
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("insert result : ", result);

        cb(result.insertId); //이거는 터미널에 뜨는 reesult 값들에 나오는 fieldcount, insertid,serverstatus이런것 중에서 insertId만 가져와서 컨트롤러파일의 콜백함수에 넣겠다는거임.
        //이렇게쓸거면 cvisitor.js파일에서 
       // exports.register = (req, res) => {
         //   Visitor.register_visitor(req.body, function(id){
           //     console.log(id);
            //   res.send(String(id)); 이렇게 id라고 변수 정해서 바꿔주면됨. id만넘긴거니까!
            //})


   })
}

//'${info.name}'문자열로감싸기위해서 ''씀. 
//cb안에있는 result.insertId 가  cvisitor.js파일안의 16~18번째줄에있는 id변수임!

// exports.register_visitor = (info, cb) =>{
//     //info=req.body; {name: , comment: } 인포는 객체다.
//     var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')`; //sql문
    
//     cnn.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log("insert result : ", result);

//         cb(result); //여기를 result로 하면 cvisitor.js파일에서 27~31번째줄에있는것처럼 변수를 result로쓰고 res.send에서  res.send(String(result.insertId)); 이렇게!
//    })
// }