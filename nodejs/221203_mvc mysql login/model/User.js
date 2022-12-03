const mysql = require("mysql");

const cnn = mysql.createConnection({
        host: 'localhost',  
        user: 'user',  
        password: '5245',   
        database: 'sesac_test'  
}) ;

exports.register_visitor2 = (info, cb) =>{
    var sql = `insert into login (id, pw, name) values('${info.id}', '${info.pw}', '${info.name}')`; 
    cnn.query(sql, (err, result) => {
        if(err) throw err;
        console.log("register result : ", result); 

        cb(result); 


   })
}

// exports.register_visitor =(info,cb)=>{
//  var sql = 'SELECT * FROM login';

//     cnn.query(sql, (err, rows) => {
//         if(err) throw err;
//         console.log("register", rows);

//         cb(rows);
        
//         })
// }



// exports.get_visitor = (cb)=>{
//     var sql = 'SELECT * FROM visitor';

//     cnn.query(sql, (err, rows) => {
//         if(err) throw err;
//         console.log("visitors : ", rows);

//         cb(rows);
        
//         })
// }

// exports.user = ()=>{
//     return { id: "1", pw: "1234" }
// }

// var users = 
// `spreatics//1234//스프레틱스
// codee//4321//코디`;

// exports.user2 = ()=>{
//     return users;
// }