const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


  io.on('connection', (socket)=> {
  
    console.log('Server Socket Connected', socket.id );
    
    // socket.emit('welcome',{msg: 'welcome'});
    
    // socket.on('response', (str) => {
    //     console.log(str);      // socket.emit('response', 'hello')을 받는거 
    // })
  
    // socket.on('hello_e',(msg) => {        //이건 버튼에 함수따로설정했을때 코드 
    //   console.log(msg);
    //   socket.emit('response', 'hello: 안녕하세요!')
    // })
   
    let data= {hello: '안녕하세요!', study: '공부하세요!', bye: '안녕히가세요!'}

    socket.on('send', (msg)=> {   //<2>클라이언트에서 에밋으로보낸 send를 서버로 받아온다 서버엔 hello,study,bye가 찍힌다
      console.log(msg)
      socket.emit('response', msg + " : " + data[msg])  //<3>서버에서 에밋으로 response를보낸다 
      //data['hello'] = '안녕하세요!'
    })
    
    socket.on('disconnect', ()=> {
      console.group('Server Socket disconnected');
    })
  
  });


http.listen(8000, () => {
  console.log('Server port :', 8000);
});


//소켓 실습1코드