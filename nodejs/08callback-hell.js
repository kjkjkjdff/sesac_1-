function login(id, pw, cb){
    setTimeout(()=> {
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb){
    setTimeout(function(){
        console.log(id+"의 비디오 리스트");
        cb(['아바타','라라랜드']);
    },2000);
}
function getDetail(video, cb){
    setTimeout(function() {
        cb("비디오 제목:"+ video);
    }, 1000);
}

//각각비동기함수임. 로그인하고 그에 대한 내용으로 비디오리스트,아바타라라랜드, 그담에 비디오제목보여줘야되는데, 순서있게진행해야되는덷. 동기식으로 바궈야됨

login('kim','1234',function(user){
    getVideo(user, function(videos){
        getDetail(videos[0],function(msg){
            console.log(msg);
        });
        // console.log("videos:",videos);
    });
  
});
// 로긴하고 콜백함수를 보냈는데 cb가 id를 받는거임..
// 로긴함수에서 cb가 겟비디오 실행시키는 함수고 겟비디오에서의 cb는 겟디테일실행시키는 함수고 겟디테일에서의 cb는 비디오제목과 메세지를 콘솔로그에찍는 함수다(?)

// let user= login(id, pw);
//  let videos = getVideo(user);
// let msg= getDetail(videos[0]);
// console.log(msg);    동기식으로 만약에되며 이렇게만 적어도 됐을건데 이게비동기라서 위에처럼 콜백함수쓰는거임.콜백함수로 비동기를 동기처럼.

// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);
// 이게 비동기 식임 
