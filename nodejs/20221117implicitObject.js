// console.log(global);
// console.log(global.console);
// // 글로벌안의 객체안에있는 콘솔안에있는 로그함수를 실행하겠다 global.consle.log(global.console);이라고 쓰는게맞음=console.log(global.console);

// 콘솔이라는객체에 함수가있어서 콘솔.로그 라고 ㅆ느ㅡㄴ건데
// 콘솔객체에 로그라는 함수가있다 ??
// global은 내장객체 콘솔은 디버깅객체에 접근할수있는 객체. 브라우저마다 좀 다르ㅏ게등장함. 콘솔로그는 어디서든 사용가능하다
let obj ={
    out: {
        in: {
            key:'value'
        }
    }
};

console.log(obj);
console.log(obj["out"]);
console.time("시간");
console.error('error');
console.timeEnd("시간");
console.table([{name: 'abc'}, {name: 'def'}]); 
// 콘솔을 표형태로 보여주는 친구 콘솔란에서 표를 보고싶을때는 테이블함수이용하면됨
console.dir(obj, {colors: true, depth: 1});
// 객체의 구조를 보여주는거임 컬러는 처음엔 obj객체를 보내고 두번째에는 옵션을보내게됨 객체의단계,구조를볼수있음.
console.dir(obj, {colors: true, depth: 2});
console.trace("Error");