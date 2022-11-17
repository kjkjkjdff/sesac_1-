function func1(value,call){
    console.log{value};
    call();
}

func1('a', function(){
    console.log("1");
});
// // func1을 부를때 fun1처럼익명함수형태로 넣어도되고
function func2(){
    console.log("2");
}

// //  func2처럼선언해놓은 함수를 넣어도됨. func1이끝나고난다음에
func1(func2);


// func1함수가 call을 파라미터로 받아서 실행하고있다. 펑션원을 부를때 fun1처럼익명함수형태로 넣어도되고 func2처럼선언해놓은 함수를 넣어도됨. func1이끝나고난다에

console.log("Start");
function login(id, cb){
    setTimeout(()=>{
        console.log('x');
        return id;
    
    },2000);
}
const id=login('kim', null);
// console.log( id+ "님 환영!");
console.log("finish");

// 로그잉ㄴ시도하는데 약 2초걸린다. 셋타임아웃은 비동기임. 그래서 밑에있는 로긴 김그 함수를 실행시키지않음.   
// 시작과 끝사이에 로그인넣고싶은데 비동기라 셋타임이. 기다리지않음. 그래서 이걸 동기적으로 사용하려고 콜백을 쓴느거임.특정함수끝나고 실행해라.

console.log("Start");
function login(id, cb){
    setTimeout(()=>{
        console.log('로그인성공');
        cb(id);
    
    },2000);
}

login('kim', function(id){
    console.log( id+ "님 환영합니다");
});
  
console.log("finish");
// /동기적으로바꿈 로그인함수실행 콜백함수실행. 