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
// function func2(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){resolve("성공");},1000);
//     });
// }
var a = func1();
console.log(a);
func1().then(function(result){
    console.log("result : ", result);
});
// then이란 값으로 받는다  앞에 func1이 프로미스일대 앞에있던 프로미스에서 리졸브된 성공된친구를 받아온다. func1실행하면 원래 promise{'성공'}나오는건데 then을 쓰면 괄호벗기고 안에것만나온다. 