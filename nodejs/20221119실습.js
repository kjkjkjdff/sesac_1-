func1(function (name){
    console.log("func2");
    console.log("name : ", name);   
})
func1().then(function(name){
    console.log("func2");
    console.log("name : ", name);   
})
// fun1이 프로미스로 돼있다는 가정하에.

function login(id, pw){
    return new Promise( function (resolve, reject){
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id);
        },3000);
    })
}

login ('kim', '1234')
    .then(function(user){

    });
    // 힌트 