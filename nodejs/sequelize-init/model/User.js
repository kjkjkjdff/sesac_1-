//sequelize모델 정의하려면 자바스크립트 문법으로 작성해줘야됨  define은 visitor테이블을 자바스크립트로 정의한다는 뜻임 
//param1은 모델(테이블이름=Visitor) param2는 컬럼정의(아이디 닉네임같은거) param3는 모델옵션정의 

// const { DataTypes } = require("sequelize");
const User = ( Sequelize, DataTypes)=>{    //visitor라는 함수만든거임 모델의 index.js에서 리콰이어할거임. 여기있는 Sequeliz가 index.js의 49번째줄의 첫번째인자인 시퀄라이즈임. datatype은 49번째줄의 Sequelize인 두번째 인자임.
      return Sequelize.define(     //시퀄라이즈define으로 모델을 정의할수있는데 이걸 비지터라는 함수에 넣어놨음.그래서 이 비지터를 실행시켜야지만 리턴값을 가져올수있다. 그래서 실행을 index.js 모델폴더49번째줄에서 실행해야된다. 
        "user2", //create table visitor(id 등등) sql문으로쓰면 이 주석.
        {
            id: { //id int not null primary key auto_increment  sql문
                type: DataTypes.STRING(10),
                allowNull: false, //null을 허용하지않는다.
                primaryKey: true, 
                autoIncrement: false
            },
            name : { //name varchar(10) not null
                type: DataTypes.STRING(10),  //10글자
                allowNull: false //true가 기본값임 
            },
            pw: { 
                type: DataTypes.STRING(5),  
                allowNull: false 
            }
        },
        {
            tableName: "user2",  //시퀄라이즈는 테이블을 복수로 만들려고 한다 기본적으로. select * from visior;라고쓰면 자동으로 visitors로 만들어버리니까 지금처럼 단수로쓰려면 테이블이름써줘야됨
            freezeTableName: true,
            timestamps: false //default 값은 true임 false로 안해두면 테이블에 수정이나 row생길때마다 타임스탬프찍어서 자꾸 저장하려든다. createdAt이라는 이름으로 저장하려함.modifyAt이라는 컬럼에도 저장하려고함.사용하기싫으면 false쓰기.
            // true로 쓰고싶으면 timestamp자체를 안쓰면됨.//collate, charset : "UTF-8"이런 옵션도 있음.
        }
    )
}

module.exports = User;

//이건 위에들어갈 코드 미리 작성한거!위에 복붙함 
// Sequelize.define(
//     "visitor", //create table visitor(id 등등) sql문으로쓰면 이 주석.
//     {
//         id: { //id int not null primary key auto_increment  sql문
//             type: DataTypes.INTEGER, 
//             allowNull: false, //null을 허용하지않는다.
//             primaryKey: true, 
//             autoIncrement: true
//         },
//         name : { //name varchar(10) not null
//             type: DataTypes.STRING(10),  //10글자
//             allowNull: false //true가 기본값임 
//         },
//         comment: { //comment mediumtext
//             type: DataTypes.TEXT('medium')
//         }
//     },
//     {
//         tableName: "visitor",  //시퀄라이즈는 테이블을 복수로 만들려고 한다 기본적으로. select * from visior;라고쓰면 자동으로 visitors로 만들어버리니까 지금처럼 단수로쓰려면 테이블이름써줘야됨
//         freezeTableName: true,
//         timestamp: false //default 값은 true임 false로 안해두면 테이블에 수정이나 row생길때마다 타임스탬프찍어서 자꾸 저장하려든다. creatAt이라는 이름으로 저장하려함.modifyAt이라는 컬럼에도 저장하려고함.사용하기싫으면 false쓰기.
//         // true로 쓰고싶으면 timestamp자체를 안쓰면됨.//collate, charset : "UTF-8"이런 옵션도 있음.
//     }
// )