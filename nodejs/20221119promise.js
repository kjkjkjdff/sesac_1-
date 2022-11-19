// new Promise(function(resolve, reject){

// });

function func1(){
    return new Promise(function(resolve, reject){
        resolve("성공");
    });
}
// var a = func1(); 
// //a라는걸로 펑1의 리턴값을받는다
// console.log(a);
function func2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve("성공");},1000);
    });
}
var a = func1();
console.log(a);
var b =func2();
console.log(b);
