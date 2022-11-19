// // // new Promise(function(resolve, reject){
// //         // resolve는 함수형태. 성공했을때 실행할 친구
// //         // reject:함수형태. 실패 or에러를 처리할때 사용되는 친구
//  }); 

// const { resolve } = require("path")


function func3(flag){
    return new Promise(function(reslove, reject){
        if(flag ) {
            resolve( "flag는 true");
        } else {
            reject("flag는 false");
        }
    });
}

// 프로미스라는 객체를 new를 이용해서만드는데 그건 함수고..콜백함수를 또받는거고?

func3(true).then(
    function(msg){
        console.log( "msg1: ",msg);

    },
    function(msg){
        console.log( "msg2: ",msg);
    }
);
// 펑3을 실행한다. then은 두개의 인자 reeslove랑 reject받을수있음 리졸브시키면 msg1나오고 리젝트됐으면 msg2가나올거임  

// func3(false).then(
//     function(msg){
//         console.log( "msg1: ",msg);

//     },
//     function(msg){
//         console.log( "msg2: ",msg);
//     }
// );
func3(false).then(
    function(msg){
        console.log( "msg1: ",msg);

    }
).catch(
    function(msg){
        console.log( "msg2: ",msg);
    }
);
// then에는 리졸브된거 캐치에는 리젝트된걸 받는다. 위에 주석된 내용이랑 같은거임. ㅜ

func3(false).then(
    function(msg){
        console.log( "msg1: ",msg);

    },
    function(msg){
        console.log( "msg2: ",msg);
    }
).catch(
    function(msg){
        console.log( "msg3: ",msg);
    }
);
// then에서 먼저처리하면 캐치로안감. 2가 실행됨.