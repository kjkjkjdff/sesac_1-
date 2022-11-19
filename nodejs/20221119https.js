const http =require('http');
const fs =require('fs').promises;

// const server = http.createServer( function(req,res){
//     res.write("<h1>Hello3</h1>");
//     res.end("<hr>");
// } );
// 2번째줄이용해서 서버를열거임 크리에이트서버를 이용해서만들어진 객체엔 on이라는 함수가있따 이베트를 등록하는 함수임. 크리에이트서버안에 함수넣을수있음 클라이언트가 접속했을때
// 저 함수를 실행해라! 서버라는 객체에.  크리에이트서버는 콜백함수를 받는데, 그안에 req는 클라이언트가 서버에 요청하는내용 res는 서버에 응답하는 내용.첫번재는 무조건 req라고 씀.
// server.on() //이벤트를 등록
// server.listen() //서버를 실행하고 클라이언트를 기다린다. res.write만 하면 계속 로딩으로뜸. end는 응답이끝났다는 뜻. 로딩안돈다.res.write갯수는상관없음.
// write(html태그로 읽어줌 )

const server = http.createServer(function(req,res){
    fs.readFile('./test.html')
    .then(function(data){
        res.end(data.toString());
    });
});
//  html파일을 홈피에 가져오는법. 

server.listen(8080, function(){
    console.log('8080번 포트로 실행');
});
// 8080번 포트로 열거고 그옆에 콜백함수넣어서, 잘 열렸으면 8080번포트 로그를 찍어라.

