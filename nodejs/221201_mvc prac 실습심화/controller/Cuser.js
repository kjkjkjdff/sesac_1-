const User = require("../model/user");

exports.login = (req, res)=>{
    res.render("login");
}

exports.loginPost = (req, res)=>{
    // "1", "1234"
    let info= User.user();
    // let info={ id: "1", pw: "1234" }
    if(req.body.id == info.id && req.body.pw == info.pw )
    res.send("로그인 성공");
    else res.send("로그인 실패");
}

exports.loginPost2 = (req, res)=>{
    let users = User.user2();
    let user_list= users.split("\n");
    //let users = 
    //`spreatics//1234//스프레틱스
     //codee//4321//코디`;
   // users.split하면
   //user_list=["spreatics//1234//스프레틱스", "codee//4321//코디"];이렇게바뀜
    let login_flag = false;  //맨첨엔 로긴 실패라고 설정하고 
    let name = "";  //로그인성공했을대 ""사이에 user[2]가 온다 
    for (let i= 0; i < user_list.length; i++){
        let user = user_list[i].split("//");
        //spreatics//1234//스프레틱스
        // user= ["spreatics","1234","스프레틱스"]
        if(req.body.id == user[0] && req.body.pw == user[1] ) { //첨으로 돌았을때 req.body.id가스프레틱스고 req.body.pw가 1234임 
               login_flag = true;
               name = user[2];
               break; //성공을하면 다음거는 할필요없다는 뜻 
        }
   }
    if(login_flag) res.send(`${name}님 환영합니다.`);
    else res.send(`로그인 실패`);
}
 
//\n이게 엔터를 의미함 

//로긴이라는곳으로 접속한다 
//모델은 mysql에 연결돼있는정보임 