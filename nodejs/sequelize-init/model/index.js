const Sequelize = require("sequelize");
// Sequelize.INTEGER이런식으로 들어가있음. VISIOTR.JS에서 데이터타입에 해당되는. 
const config = require("../config/config.json")["development"];  //객체 키형태로 development가져옴//config.json쓰면 파일마다 모델파일 안고쳐도됨.

// config = {
//     "development" : {
//        "host" : "localhost",
//        "database": "sesac_test",
//        "username": "user",
//        "password": "5245",
//        "dialect": "mysql"
//     },
//      "production" : {
//         "host" : "localhost",
//         "database": "sesac_test",
//         "username": "user",
//         "password": "5245",
//         "dialect": "mysql"


//     }
// }

// config = {
//        "host" : "localhost",
//        "database": "sesac_test",
//        "username": "user",
//        "password": "5245",
//        "dialect": "mysql"
// }   //["development"];까지 써주면 config는 이거임.

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); 
 //인자 4개를 함수에넣은거임 마지막 config는 전체정보 //데이터베이스 연결하는 코드임 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize
// } 이렇게 됐다는 뜻임. 

db.Visitor = require("./Visitor")(sequelize, Sequelize);  //이 괄호는 함수실행한다는뜻 함수의 인자로 각각 33번째줄이랑 1번째줄에 const옆에 정의된 변수를 가져온다.
//visitor는 변수라 아무거나써도되는데 그냥 모델파일이랑 똑같이쓰는게좋음
//db.Visitor = rerquire("./Visitor") 이거까지만쓰면 함수를 가져온거고 그옆에 ()를쓰면 함수를 실행까지한다는 뜻 

// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor": "Visitor.js에서 return받은 값"
// } 윗부분코드는 이렇게 됐다는 뜻임. 


db.User = require("./User")(sequelize, Sequelize); 

db.User = require("./User")(sequelize, Sequelize);
db.Product = require("./Product")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);

db.User.hasMany(db.Payment, {
    foreignKey : "user_id", //페이먼트테이블에있는 거
    sourceKey : "user_id", //유저테이블에있는 user_id
    onDelete: "cascade"
})
//유저라는 한사람은 여러개의 결제내역을 가질수있음 

db.Payment.belongsTo(db.User, {
    foreignKey : "user_id", 
    sourceKey : "user_id", 
    onDelete: "cascade"
});

db.Product.hasMany(db.Payment, {
    foreignKey: "product_id",
    sourceKey : "product_id", 
    onDelete: "cascade"
})

db.Payment.belongsTo(db.User, {
    foreignKey : "product_id", 
    sourceKey : "product_id", 
    onDelete: "cascade"
});

module.exports = db;

