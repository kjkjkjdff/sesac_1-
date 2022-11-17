// 배열구조분해
let list = ['apple','banana'];
[item1, item2]=list;
//let item1=list[0];
//let item2=list[1]; 이두줄을 위에한줄로 쓸수있음 .배열 구조분해형태임.  배열순서대로 배정됨
console.log(item);
console.log(item2);

[item1,item2 = 'peach',  item3='orange']= list;
// 아이템원투에 아무것도없을때 피치를 넣어라. let item3=list[2]만 쓰면 오류나는데 배열 구조분해형태쓰면 대체가능
console.log(item1);
console.log(item2);
console.log(item3);
// 1에는 애플 2에는 바나나가들어옴 오렌지는 쓰리.

// let x=1;
// let y=3;

// let temp=x;
// x=y;
// // y=temp;
// 원래 저렇게써야되는데 한줄로

[y,x]=[x,y]   
// x랑 y를 구조로만들겟다. 구조분해. xy로 배열은 만든다. [1,3]이라는 배열은 만들었다. 구조분해해서 [a,b]=[1,3] a에1들어가고 b에3들어감  x값이 y에들어가고 y값이 x에들어간다. 

let obj = {
    a: 'one',
    b: 'two',
    e:  '1',
    f:'2'
};

// let a= obj.a; 
let{a,b}=obj; 
// a변수에는 원 b변수에는 투가들어감
// 객체구조분해는 순서상관없이 키값으로 이름을 찾는다
console.log(a);
console.log(b);

let{b:key1,a}=obj;
    // b로돼있는키를찾아서 값을가져오고 그걸 key1이라는 변수에 넣어주고 a라는 이름으로 변수가 만들어진다.변수이름바꿀때

    let{ b: key1, a,c='three'}=obj;
    console.log(c);

let {b, ...rest }=obj;
// 전개연산자:나머지애들다 가져오는거 배열이나 객체를 전개해서 가져오는거 /b를 추출하고 나머지애들을 전개해서 가져온다
console.log(b);
console.log(rest);

let a = {
    one: 1,
    tow: 2
};

let { one: o } = a;

console.log( o );

//let {one } =a; console.log(o); 원을 넣고싶은데  원을 o라고 다르게부르고싶어서 저렇게 지정해서 콘솔로그에 1값을 나오게하는?ㅇㅇ
let kim = {
    name: 'kimkim'
}
let lee = {
    name: 'leelee'
};

let {name: kimname} = kim;
let {name: leename} = lee;

//이름이 둘다 네임이니까 따로 키(key1)를 지정해주는..?
