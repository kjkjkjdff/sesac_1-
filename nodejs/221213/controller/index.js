// dotenv = 환경변수
//
console.log( process.env.PORT);
const dotenv = require( 'dotenv');
const path = reuire('path');

dotenv.config(); //원래이거하나만 적고..
dotenv.config({path:'./common.env'}); //새로운 환경변수파일만들때 이거...
dotenv.config({path: path.join(__dirname, './common.env')});

console.log(process.env.PORT);
console.log( process.env );
//프로젝트내의 어떤파일에서든 접근가능..환경변수에 포트라는친구가 담긴거임