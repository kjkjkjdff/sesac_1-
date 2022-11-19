// // new Promise(function(resolve, reject){

// // });

// function func1(){
//     return new Promise(function(resolve, reject){
//         resolve("성공");
//     });
// }
// // var a = func1(); 
// // //a라는걸로 펑1의 리턴값을받는다
// // console.log(a);
function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("성공");},1000);
    });
}
// var a = func1();
// console.log(a);
func2()
.then(function(result){
    console.log("result2 : ", result);
    return 'a';
}).then(function(abc){
    console.log( "abc: ",abc );
});

// 펑2가 펜딩상태면 then이 기다린다. 

// then을 리턴시킴23번줄. 체이닝시킴. 