function func1(callback){
    console.log("func1");
    console.log(callback);
    callback('이름');  
    // 이게 실행시키는곳인데 실행시키는곳에서 값을보내줘야해서 이름이라고 적음. 
}
function func2(){
    console.log("func2");
    console.log("name: ", name);
}
func1(func2);
// = func1(function(){
//     console.log("func2");
// })  위에랑같은거임. 

// 마치 var a=1;
//      test(a); 위에두줄이랑
//      test(1);이랑 같은거임. 이건바로 값을 호출하는거. 
// func1();
// func2();
// // 펑션실행

func1();
func2();
// 펑션1원을 펑2로 보내서 강제로  . 펑2가 콜백임. 펑2는 펑1이끝날때까지 실행못함.강제로 순서만들어주는것. 


fun1(function (name){
    console.log("func2");
    console.log("name: ", name);
});
// 이건 func1(func2)랑 같은건데 풀어쓴거고 function fuc2인데 한번만쓸꺼니까 익명함수로쓰려고 fucn2이름 지운거임. 