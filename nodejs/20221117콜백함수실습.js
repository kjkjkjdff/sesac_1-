function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}

let a = call('kim');
console.log( "시작은 " + a);
let b = back();
console.log( "두번째는 " + b );
let c = hell();
console.log( "세번째는 " + c);

// 12번줄의 kim이 1번줄에 들어가서 사용자는 kim나오고 그리고 13번째줄 시작은a에서 a는 call에 kim을 넣엇을때나오는,그니까 retunr call. call이라는 글자를
// 내보낸다..그래서a는 리턴콜의 콜임! 그래서 시작은 call..