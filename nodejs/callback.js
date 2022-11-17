function test1(cb){
    console.log('test1');
    cb();
}
test1(function(){
    console.log('test3');
})



function func1(value,call){
    console.log(value);
    call();
}

func1('a',function(){
    console.log("1");
} );

function func2(){
    console.log("2");
}

func1(func2);

//////// value자리에 func1의 a와

function func1(value,call){
    console.log(value);
    call();
}

func1(a){
    console.log("1");
};

function func2(){
    console.log("2");
}


func1(func2);

//이거결과는 value에 a가 들어감 왜냐면 console.log(value)부터 실행->그래서 1이 나오고 순서대로 그다음에 두번째줄의 call이라는 함수 실행하면 2가 나옴.






function test12(){
    test34();
}
function test34(){
    console.log(34);
}
test12();



//////////////////////////////////////////
function func1(cb){
    console.log("func1");
    cb();
}
function func2(cb){
    console.log("func2");
    cb();
}
function func3(cb){
    console.log("func3");
    cb();
}
func1(function(){
    func2(function(){
        func3(function(){
            console.log("finish");
        })
    })
})
//이거 부터이해하고 콜백지옥이해하기//