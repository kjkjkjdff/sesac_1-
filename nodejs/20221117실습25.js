const os= require("os");
console.log("사용 가능한 메모리:" + os.freemem()+"/"+os.totalmem());
console.log("시스템의 메모리:"+ os.freemem());
console.log( "홈 디렉토리 경로 : ",os.homedir());

const path= require("path");
const file= __filename;
console.log('path.sep:', path.sep);
console.log("path.extname: ", path.extname(file)); 
console.log("path.parse: " ,path.parse(file));
