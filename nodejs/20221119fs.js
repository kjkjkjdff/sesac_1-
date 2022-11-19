const fs =require("fs");
// const { stringify } = require("querystring");
// 내장모듈이라 이렇게불러오면됨

// 콜백함수로 리드파일가져오는법!은 아래.
fs.readFile("test.txt", function(err,data){
    if( err) throw err;

    console.log( "data: ", data);
    console.log( "data2 :", data.toString());
});
// 펑션에는 두개의함수가오는데 처음거엔 err두번째거엔 정보가온다.
// 4번째줄. 에러가있으면 에러를 던져서 멈추겠다.
// 8번재줄 투스트링으로 문자열로 변환하기 혹은 String(내용data)
// 이게 파일읽는법. 
// function(err,data){
//     if( err) throw err;

//     console.log( "data: ", data);
//     console.log( "data2 :", data.toString());
// });이부분이 콜백함수임.

// 프로미스형태로쓸때는 아래.
// var result =fs. readFile("test.text");
// 이렇게하면 파일 읽는데 시간이걸리는데  파일처리시스템이 비동기라 undefined뜸, 이때 콜백함수이용해서 읽은걸 ㅓ가져오거나 덴을 이용해서 읽은걸가져오거나 해야됨.안그럼 undefined뜸.
const fs2 =require("fs").promises;
// 이렇게하면 promise로 돼있는 함수들을 불러와서 쓸수있음.
fs2.readFile("./test.txt")
    .then((data)=> {
        console.log("promise - data:", data);
    })
    // 프로미스함수에 인자를 한개만넣고 덴으로 인자한개넣고..불러옴(?)

// fs2.writeFile("./write.txt", 'sesac')
// // 만들파일명하고 넣을내용적으면됨
//        .then(function(result){
//         console.log("result : ",result);
//        });

//     //    writefile은 리졸브값을 보내지않아서 받을필요가없음 그래서 저렇게쓰면안됨.

fs2.writeFile("./write.txt", 'sesac')
       .then(function(){
           return fs2.readFile('./write.txt')
       })
       .then(function(data){
           console.log(data.toString());
       });
// promise는 fs2.readFile임
fs.writeFile('./write2.txt','ㅇㄹㅇㄹ',function(err){
      if(err) throw err;
      console.log("writeFile success!");
      fs.readFile("./write2.txt", function(err,data){
        if(err) throw err;
        console.log("wirte2File data:", data.toString());
      })
});
// 이건 콜백함수로 부르는법
            
// 40줄:파일만든다 그다음에 42줄. 읽는다. 그다음에 45번줄 로그찍기.
//ㅇㄹㅇㄹ는 wirte2.txt안에생길 내용 