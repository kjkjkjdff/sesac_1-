//변수 의 타입

//키워드 변수이름:타입=값;
//타입표기( type annotation)
// const str:string =1;  //1은 문자열이 아님. str은 문자열.  1은 넘버라서 str으로 정의된 타입에 들어갈수없다 
const str:string = "string";

const num:number =1;
const bool:boolean = true;

//object타입 //변수,객체 등등  
const arr1:number[]=[1,2,3];
const arr2:string[]=['a','w','e'];
const arr3:Array<number> = [1,2,3];
console.log(arr2[0].concat('!'))  //콘캣은 스트리엥사용가능

//tuple  고정돼서 바꿀수없는것  디비에서는 행이고...여기에서의 튜플은 길이가 고정되고 각 요소의 것이 지정된?

const arr4:[boolean, string] = [true, 'a'];  //몇번째 인덱스에 뭐가들어올건지 따로따로 지정ㅇ가능  //요소가 두개 인덱스의 타입도 고정됨.이런게 튜플임.
// console.log(arr4[0].concat('!'))이건 에러남 

//enum 열거형 
enum Names {sesac, 새싹}
//특정값을 열거하는 집합이 enum임 이넘타입.
let name1:Names = Names.sesac;  //열거된것중에서 어떤것을 선택할수 있는거임.
// name1 = 'sesac' //넴임1은 열거형타입으로 설정돼서.. names를 사용할때 사용한것만 쓸수있다... name1은 오류남 

//any : 최대한 안 쓰는 게 좋다.
//모든 타입에 대해서 허용한다. 현재 자바스크립트에 타입을 부여한다면 any타입. 타입을 명확하게 정의해놓고 오류예방하기 위해선데 애니를ㄹ써두면 굳이 타스쓸필요가없다
const any1:any= [1,2,3]  //어떤타입이든 상관없다 
//void : undefined 와 null 만 들어갈 수 있는 타입임 
const var1:void =undefined; //굳이 이렇게할필욘 없다.. 함수를 만들때 리턴을하지않으면 그때 리턴타입을 보이드로 지정해야된다 

//never 절대 끝에 도달하지않는 애한테 지정하는 타입//영원히 도는 친구 ... 왜존재하는 지 모르겠다!!
function neverEnd():never{
    while(true){

    }
}

//함수/////////
//(매개변수 : type) : <return>
//function 함수이름 (매개변수: type):반환타입 {}
//function sum1(a:number, b:number) :number{ 여기서 :number는 리턴타입
function sum1(a:number, b:number) :number{
    return a+b;
}
console.log(sum1(1,2));
// console.log(sum1('1',2));에러남
// console.log(sum1(1,2,3));  //많이보내는것도안됨. 딱 정해진수만큼만 보내야됨 
function sum2(a:number, b?:number) :void{ //물음표를 붙이면 필수가아니라.받거나안받을수있다.
   console.log(a)
   console.log(b)
}
sum2(1)
sum2(1,2)


// //function sum1(a:number, b?:number) :number{
//     return a+b;
// }이렇게했을때 b에 오류가나는이유는 b는 넘버또는 언디파인드가올수있음. 그럼 nubmer+number/ number+undefined가 올수있음 넘버라는 타입을 리턴해야되는데 언디파인드가 섞여있으면 
//리턴타입이 넘버타입이 될수없기때문에 오류가 나는거다. 
// 그래서  
// function sum1(a:number, b?:number) :number{
    //if(b == undefined)return a;
//     else return a+b; 라고 쓰면 에러가 해결됨. 타입스크립트할땐 각각의 타입에 대해서 b가 뭐일땐 어떻게 하겠다 이런식으로 나눠서 정해줘야됨 
// }

// function sum1(a:number=1, b?:number) :number{
//     return a+b;  //이런식으로 매개변수에 값넣어도됨 
// }

//interface
//미리 정해놓는 약속같은걸 인터페이스라고하는데 내가 어떤객체에 어떤속성이 들어오고 어떤클래스나 파라미터가 들어오는지 미리정의해두는 거를 인터페이스라고한다 
interface Student {
    name: string,
    age: number,
    nickname?: string  //이건 필수가아니다를 ?로 표현
}

const student1: Student = {
    name: '이름1',
    age: 10
}
const student2: Student ={
    name: '이름2',
    age:20,
    nickname:'닉네임2'
}
function check( stu:Student){
    console.log(stu.name)

}
check(student1);
check(student2);

//여러군데서 사용하는 인터페이스는 글로벌로 따로 빼두는 편이다!

//클래스

// class 클래스이름{
//     변수명: 타입;
//     constructor(변수:타입){
//         this.변수명 = 변수
//     }
// }
class Person {
    id: string;
    constructor(name:string, age:number){
        this.id= name+ age;
    }
}
const person1 =new Person('이름3',30);
console.log(person1.id);

// interface 는 객체에만 사용할수있다..클래스에도 사용할수있따

interface Shape {
    width:number;
    getLength(): number;    //이 함수는 넘버를 리턴한다
}
class Square implements Shape {
   
    constructor (readonly width: number){ }   //readonly 쓰면 초기값셋팅하던작업을 안해도됨. 잉? {안에 this.number어쩌고가 들어있는거다...엥?}
    // height: number; //이런거는 맘대로 추가해도 상관없음( 대신 width,getlength가 있는 상태에서 )
    getLength():number{
        return this.width;  //위에서 인터페이스로 함수를 정의해놔서 이렇게 다 써야 오류가안남
    }
}
// class Square2 implements Shape{

// }
const square1 =new Square(10);
console.log(square1.getLength());

class Person2 {
   
    constructor(public name: string, private age: number){
        this.name =name;
        this.age =age;
    }
}
const person3 =new Person2('a',1);
console.log(person3.name)
// console.log(person3.age); //프라이빗이라서 외부에서 쓸수없음 .오류남.

//제네릭 (Generic) 타입을 함수의 매개변수처럼 사용하는 것임  재사용성 높은 컴포넌트를 만들때 사용 많이함. 재사용하기 위해서. 여러가지 타입에서 동작하는 친구를 만들때 많이 쓴다

//제네릭 (Generic ) <T> //애니를 안쓰는이유는 애니는 타입을 지정한게 아닌거니까. 제네릭을 씀으로써 타입을 지정할수 있는 여지를 만들어서... 지정가능하게
function getText<T>(text:T):T{
    return text;  //넣는 변수의 타입과 리턴하는 타입이 같았으면 좋겠다 
}
console.log(getText<string>('a'))   //T에는 뭐든들어올수있고 여기에서 STRING을 넣엉준거임 그래서 T가 STRING이 되는거임. 그리고 A라는 문자열을 리턴하는거임
console.log(getText<number>(1));    //겟 텍스트라는 함수하나를 여러가지 타입에서 동작하도록 만든거임. 만약에 저걸몰랐다면 

//function getText1(test:string):string 이런식으로 계속 만들어야되니까 불편!!