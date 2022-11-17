console.log("__filename: "+ __filename);
console.log("__dirname: "+ __dirname);

// 파일찾을때이런 방식으로 찾음

// process객체 =현재 실행중인 노드 프로세스 정보가 담긴 객체

console.log("process.version: ", process.version);
console.log("process.arch: ", process.arch);
console.log("process.platform: ", process.platform);
console.log("process.cpuUsage: ", process.cpuUsage);
// 컴퓨터관련돼서 정보나옴

// os모듈 = 운영체제 정보나오는. 얘는 내장모듈이라서 글로벌쓰고 const os쓰고 불러와야됨. 그냥객체는 그렇게안써도됨(?)
const os= require("os");
console.log( "os.type: ",os.type());
console.log("os.cpus: ",os.cpus()); 
console.log( "os homedir : ",os.homedir());
console.log("ods.freemem:", os.freemem());

// path 모듈 은 폴더랑 파일경로를 쉽게조작할수있도록 도와주는친구

const path= require("path");
const file= __filename;
console.log("path.extname: ", path.extname(file)); 
// 파일의 확장자를 가져오는 친구임
console.log("path.parse: " ,path.parse(file));
// 구분지어서 가져오는거 , 패스내에서 구분지을수가있는데 extname은 확장자로만 구분짓고 parse는 따로따로 가져와서 보여줌

