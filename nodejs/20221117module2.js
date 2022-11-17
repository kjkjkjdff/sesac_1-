const result =require('./20221117module.js');
//{a:1,b:3}
const{a,b}=require('./20221117module4');
// 위아래가 같은거임 구조분해(?)


console.log( result.a );

// 컨트롤시프트 물결하면 터미널나옴.
console.log(result.b);  

// 변수값가져옴
result.test();
// 함수를 가져옴 result에있는 테스트라는 함수를 실행시킴. 모듈에있는 함수나 변수 가져오는법.어떤모듈을 불러온친구를 또 모듈로 만들수있다.

