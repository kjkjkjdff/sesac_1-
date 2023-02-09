const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//닉네임 연결해주기위한 객체 생성{소켓아이디: 닉네임, 소켓아이디: 닉네임}
let list = {}

io.on("connection", (socket)=>{
    console.log("Server Socekt Connected");
     
    socket.emit("info", socket.id); ///info라는 이름으로 소켓아이디를 보내준다. 

    // io.emit('notice', socket.id + "님이 입장하셧습니다")

    socket.on("username", (name)=> {     //html에서보낸 닉받기 
        list[socket.id] = name;  //키값 소켓아이디. 밸류는 네임. 소켓아이디는 서버가 항상 알고있음. 
        io.emit("list", list); //dm보내기위해서 리스트 6번
        io.emit('notice', name + "님이 입장하셨습니다. ")
    })

    socket.on('send', (json)=> {
        //json = {msg:~~~, to:~~~}
       json['from'] = socket.id;
       //json = {msg: ~~~, form:~~~, to: ~~~}
       json['username'] = list [socket.id]
       //json {msg: ~~~, from: ~~~소켓아이디, username :~~~, to: ~~~, is_dm:}
       json['is_dm'] =false; //전체일때는 false

       if(json.to === "전체") io.emit('newMSG', json)  //받은메세지를 다시 모두 클라이언트에게 전달  //json= {msg:~~~} 1번
       else {
        json['is_dm']=true
        const socketID= Object.keys(list).find(key => list[key]==json.to)
        console.log(Object.keys(list).find(key => list[key]==json.to)) //객체의 키값만 가져오는 법   //json.to에는 보내는사람의 닉넴이들어잇음. 그거랑 배열돌면서 list[key]가 값이 같으면 그것의 소켓아이디를 리턴해준다는 뜻. 
        io.to(socketID).emit('newMSG', json)  //전체메세지가 아닐때.  //이것만하면 디엠할때 내가보낸ㄱ ㅔ나하테안보여서 밑에줄추가해야됨
        socket.emit('newMSG',json)
       }
    })
    
    socket.on('disconnect', () => {
        io.emit('notice', list[socket.id]+ "님이 퇴장하셨습니다"); //클라이언트에 연결끊겼다고 보내주기  
        delete list[socket.id] //소켓.id를 키로갖는 데이터가 사라지게된다 
        io.emit("list", list) //접속끊긴 아이디를 지우고 이걸로 클라이언트한테 다시 보낸다 실시간으로 업데이트 
    })
});

http.listen(8080, () => {
  console.log('Server port :', 8080);
});
