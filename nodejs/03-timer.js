setTimeout(function(){
    console.log("1.5초 후 실행");
}, 1500);

// setTimeout()원랜이렇게 적는데 저건 이름없이??함수안에 함수를 넣음 익명함수로.이름없이넣음
// function a() {console.log("1.5초후 실행");}
// setTimeout(a, 1500);

const func2 =setInterval(()=> {
    console.log("1초마다 반복");
}, 1000);
const func3 =setTimeout(()=> {
    console.log("func3 실행");
}, 3000);

setTimeout(()=> {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4=  setImmediate(()=> {
    console.log("func4즉시 실행");
});

const func5=  setImmediate(()=> {
    console.log("func5즉시 실행");
});
// func5는 취소됨 

clearImmediate(func5);
// func1은뭐임?