const Visitor = require("../model/Visitor");
//라우터의  인덱스.js에 연결돼있음 
exports.visitor = (req,res)=> {
     Visitor.get_visitor(function(result){
        console.log(result);
        res.render("visitor", {data:result}); //서버응답임 visitor란 ejs를 렌더하고  콜백함수의 매개변수인 result를 data로 넘겨주고있다 
     }); //여기서 reesult가 visitor.js의 18번째줄의 rows임 거기의 cnn.query를 실행한결과가 rows인데 그게 여기 reesult에 들어오는거임
}

// // /function(result){
//     console.log(result);
//     res.render("visitor", {data:result});
//  }); 이게 get visitor에 매개변수로 들어온 콜백함수인데 MODEL VISITOR.JS에서 CB로 들어옴 

exports.register = (req, res) => {
    Visitor.register_visitor(req.body, function(id){
        console.log(id);
        res.send(String(id)); //이건 아이디를 넘겨준다는거임  변수전부 result였는데 ID로 세개 바꿈  //포스트요청이라서 req.body.
    })
    //insert req.body에있는거 insert
   //body에 사용ㅇ자이름,코멘트가 담겨있음.  레지스터비지터에 바디랑 콜백함수를 인자두개 넘겨주고있기때문에
   //visitor.js파일가서 수정해야됨31번줄
  //여기있는 result는 쿼리를 날려서 나온 결과값임 //이거한담에 result세개를 id로 바꿈 변수이름은 대소문자나 다른단어 아무거나가능
}  
//result.insertId(vsitior.js의)가 저기 id에 들어가는 거임!


// exports.register = (req, res) => {
//     Visitor.register_visitor(req.body, function(result){
//         console.log(result);
//         res.send(String(result.insertId)); 
//     })
// }

exports.delete = (req, res)=>{
     //mysql req.body.id에 해당하는 데이터를 delete해야됨 =>모델에서해야됨
     //서버 응답res.send를 해야됨.
     Visitor.delete_visitor(req.body.ID, function(){ //visitor.js에서 74번째줄result라서.여기도 result.//ejs파일에서  data: {ID: delete_id}라고해서 req.body.ID라고. 여기 req.body.ID가 visitor.js의 67번째줄 id임
         res.send(true);  //삭제가 잘 됐구나하고 true라는 응답을 보냄 res.send("삭제성공");이런식으로 써도됨
     })
}


// exports.delete = (req, res)=>{
//     //mysql req.body.id에 해당하는 데이터를 delete해야됨 =>모델에서해야됨
//     //서버 응답res.send를 해야됨.
//     Visitor.delete_visitor(req.body.ID, function(result){ //visitor.js에서 74번째줄result라서.여기도 result.//ejs파일에서  data: {ID: delete_id}라고해서 req.body.ID라고.
//         res.send(true);  //삭제가 잘 됐구나하고 true
//     })
// } 위에거 원래 이건데 result변수 삭제한거임 

exports.get_visitor_by_id = (req, res)=>{
    //req.query.id에 해당하는 데이터를 조회해서-->모델에서 
    //서버에 응답해서 조회한 데이터를 응담한다!
   Visitor.get_visitor_by_id_model(req.query.ID, function(rows){
   res.send(rows);
  });
}
exports.update_visitor = (req, res)=>{
    // req.body데이터를 mysql에 업데이트 할수있도록 =>모델
    //서버에 응답을 보낼거임 
   Visitor.update_visitor(req.body, function(){
    res.send(true); //응답보내면 클라이언트코드인 ejs로 간다 
   });
}