const num =require('./20221117module3.js');
const a= num.a; 
// 가져온 배열중에서 a를불러오겠다
const b= num.b;

function add(){
    return a+b ;
}

module.exports = add;
// 내보내는 모듈의 형태에 따라 받는 형태도 달라진다. 함수를 모듈로 보낸것