
const fs =require("fs").promises;

fs.writeFile("./sesac.txt", '반갑습니다')
       .then(function(){
         return fs.copyFile("./sesac.txt","./sesac3.txt" );
       })
        
       .then(function(){
           fs.rename("./sesac3.txt","./new.txt");
           
       });

    
// require(안에있는 fs는 고정임) 밖에 const fs(이거는 변수로서 지정가능하고 writefile앞의fs도 지정가능