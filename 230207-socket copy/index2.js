const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index2.html");
})

// 클라이언트 소켓이 연결이 되면 콜벡 함수가 실행된다.
// (socket) : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
// 클라이언트마다 연결된 소켓이 다르다 그것을 확인하기위해 소캣아이디로 확인해보겟다.
io.on('connection', (socket) => {
  console.log("Server Socket connected"); // (2) 서버에 커넥트됐다고 뜨고..
  socket.on('send', () => {               //(3)여기에서 받고 
    socket.emit('message', {});      //(4)emit으로 다시 메세지를 보내고
  })
})

http.listen( 8000, () => {
  console.log('Sever port : ', 8000 );
})

//index2.html이랑 index.js는 함수안에 소켓이 있을때랑 없을때 차이 설명하기 위한 코드...