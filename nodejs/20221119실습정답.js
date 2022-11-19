function login(id, pw){
    return new Promise( function (resolve, reject){
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}

function getVideo(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        console.log(id+"의 비디오 리스트");
        resolve(['아바타','라라랜드']);

        },2000);
    });
}

function getDetail(video){
    return new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("비디오 제목:"+ video);
    }, 1000);
    });
}

login ('kim', '1234')
    .then(function(user){
        console.log("user: ", user);
        return getVideo(user);
    })
    .then(function(videos){
        console.log("videos :", videos);
        return getDetail(videos[0]);
    })
    .then(function(msg){
        console.log( "msg: ",msg);
    });
// login('kim','1234')
//       .then(getVideo) 이렇게쓰면 겟비디오함수가 바로 실행되는거임. 이것도 틀린건아님.

    // 14번째줄의 아바타,라라랜드인 resolve가 여기서 33줄 videos임. 
    // 겟비디오도 promise임. then안에서 리턴하면 리턴을 다음then이 받는다.  
    // getVideo().then()이 실행되는거임.  

    // 찐설명 : kim ,1234실행되면 resolve는 다음 then으로 간다. return은 다음 then으로간다??
    // 맨첨에 kim,1234들어가고 1번부터5번줄의코드가 3초뒤에 실행된다 4,5번이 동시에 진행되는데 resolve(id)가 실행될때 그 id가 31번줄 getvideo의 user임
    // 그럼 겟비디오실행되고 겟비디오에서 13~14번줄이 동시에 2초뒤에 수행되는데 그때 resolve(아바타,라라랜드)실행되면은  리졸브는 다음 then으로 가는거니까
    // 33번줄then으로가서 get디테일 실행하는데 14번줄의 아바타,라라랜드값이 33번줄의 video임 그 비디오의 결과물이 35번return getdetail이고
    // 그럼 1초뒤에 22~23번이 실행되는데 거기에서 resolove(비디오제목+video)가 실행되면 그 값이 35번에서 리턴값으로 나오면
    // 23번의 비디오제목+video가 37번의 msg임.

    // function login(id, pw) {
    //     return new Promise( function ( resolve, reject ) {
    //         setTimeout( function() {
    //             console.log( "사용자 입장" );
    //             resolve(id);
    //         }, 3000);
    //     })
    // }
    
    // function getVideo(id) {
    //     return new Promise(function(resolve, reject){
    //         setTimeout(function(){
    //             console.log( id + "의 비디오 리스트");
    //             resolve( ['아바타', '라라랜드']);
    //         }, 2000);
    //     });
    // }
    // function getDetail(video) {
    //     return new Promise(function(resolve, reject){
    //         setTimeout(function() {
    //             resolve("비디오 제목 : " + video);
    //         }, 1000);
    //     });
    // }
    
    // login( 'kim', '1234' )
    //     .then( function(user){
    //         return getVideo(user);
    //     })
    //     .then( function(videos){
    //         console.log( "videos : ", videos );
    //         return getDetail(videos[0]);
    //     })
    //     .then( function(msg){
    //         console.log( "msg : ", msg );
    //     });
    