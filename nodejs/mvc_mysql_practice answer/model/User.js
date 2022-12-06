const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '5245',
    database: 'sesac_test'
});

exports.post_signup = (data, cb) => {
    let sql = `INSERT INTO user2(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
    cnn.query( sql, function(err){
        if ( err ) throw err;
        cb();
    });
}

exports.post_signin = (id, pw, cb) => {
    let sql = `SELECT * FROM user2 WHERE id='${id}' and pw='${pw}' limit 1;`; //이게 비번이랑 아이디를 확인하는 문장임! sql에서 아이디랑 비번 해당하는거 가져오면 컨트롤러에서 result.legth가1이니까 트루..
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });                 //sql문 밑에있는것도 함순데 이것도 사실원래 컨트롤러에잇던거임
}
exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user2 WHERE id='${id}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.update_profile = (data, cb) => {
    let sql = `UPDATE user2 SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    cnn.query( sql, ( err ) => {
        if ( err ) throw err;
        cb();
    })

}
exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM user2 WHERE id='${id}'`, (err) => {
        if ( err ) throw err;
        cb();
    });
}