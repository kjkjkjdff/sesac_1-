// const Car =require("./07class");
// console.log( Car);
// // 클래스가져오기 클래스라는 템플릿.

const {Car}=require("./07class");
// 이 구조분해 형태로 가져올수있음
console.log(Car);

var car1 = new Car("red");
console.log( car1.returnColor());
// 클래스를 이용해 객체를 생성하기위해 new를 쓰면 컨스트럭터라는 함수를 실행하는거임. 컬러가 파라미터의 값으로 들어간다.corlor를 

var car2 = new Car("blue");
console.log(car2.returnColor());


var car3 = new Car("yellow");
console.log(car3.returnColor());