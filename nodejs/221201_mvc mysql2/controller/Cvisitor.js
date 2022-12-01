const Visitor = require("../model/Visitor");
//라우터의  인덱스.js에 연결돼있음 
exports.visitor = (req,res)=> {
     Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor", {data:result}); //서버응답임 visitor란 ejs를 렌더하고  콜백함수의 매개변수인 result를 data로 넘겨주고있다 
     });
}

// // /function(result){
//     console.log(result);
//     res.render("visitor", {data:result});
//  }); 이게 get visitor에 매개변수로 들어온 콜백함수인데 MODEL VISITOR.JS에서 CB로 들어옴 

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id)); //이건 아이디를 넘겨준다는거임  변수전부 result였는데 ID로 세개 바꿈 
    })
    //insert req.body에있는거 insert
   //body에 사용ㅇ자이름,코멘트가 담겨있음.  레지스터비지터에 바디랑 콜백함수를 인자두개 넘겨주고있기때문에
   //visitor.js파일가서 수정해야됨31번줄
  //여기있는 result는 쿼리를 날려서 나온 결과값임 //이거한담에 result세개를 id로 바꿈 변수이름은 대소문자나 다른단어 아무거나가능
}


// exports.register = (req, res) => {
//     Visitor.register_visitor(req.body, function(result){
//         console.log(result);
//         res.send(String(result.insertId)); 
//     })
// }