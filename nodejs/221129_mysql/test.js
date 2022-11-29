const mysql = require("mysql");

const cnn = mysql.createConnection({
        host: 'localhost',  //mysql에 접속할수있는 주소 '127.0.0.1'이런거 적어도됨 
        user: 'user',  //mysql에도 사용자가 있음  root는 cmd나 워크벤치로 들어가야됨 코드로서 외부에서 접근하는걸 허용하지않음 그래서 root말고 새계정만들어야됨.
        password: '5245',   //mysql비번
        database: 'sesac_test'   //mysql폴더이름
}) //mysql안에있는 createconnection함수  . 그안에 중괄호로 객체들어감  //내가적어둔 호스트 유저 등등의 정보에 해당하는 데이터베이스에 연결해주는 함수가 
//createconnection함수 

cnn.query('select * from user', (err, result)=>{
      if (err) throw err; //console.log(err);라도 써도되는데 throw err만 써도 찍힘 

      console.log(result); //에러가 발생하지않는경우 결과값이 찍힌다. 

});
//(err, result)=>이건 콜백함수임. sql시행중에 에러가발생하면 저 err변수에 정보가 담길거임. err가 발생안하면 err=undefined;라고 뜰거임그래서
//if문안으로 안들어갈거임 만약에 에러나면 err={dfdfdf}이렇게 값이 들어갈거임. 값이 있다는건 if문 안으로 들어가면 트루가되고 그럼 콘솔로 찍힌다는 뜻임.
//select * from user 아까만들어둔 sesac_test라는 database라는 안에있는 user 라는 테이블 

cnn.query('insert into user(ID, name, age) values("d","홍길동",80);', (err, result)=>{
    if (err) throw err; //console.log(err);라도 써도되는데 throw err만 써도 찍힘 

    console.log(result); //에러가 발생하지않는경우 결과값이 찍힌다. 

});