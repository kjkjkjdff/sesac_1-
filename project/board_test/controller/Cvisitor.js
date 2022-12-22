const { Board } = require("../model");
const fs =require("fs").promises;

exports.index = (req,res) => {
    // res.render("list", {data: result });

    Board.findAll({
        order: [["number", "DESC"]],
    })
    .then((result) => {
        res.render("basicBoard", {data: result });
    })
    
}
//첨에 res.render("list", {data: result });라고 적었는데 오류나서 Board.findOne으로 적었는데 또 오류나서 Board.findAll쓰니까 해결됨..

// exports.get_data = (req, res) => {

//     Board.findOne({    
//         where : { number : req.query.number },  
//     })
//     .then((result) => {
//         res.send(result);
//     })
// };   필요없는 코드!


exports.write = (req,res) => {
    res.render("writeBoard");
}


exports.write_data = (req, res) => {
    console.log( req.file );
    let data = {
       title: req.body.title,
       id: 'user',     // id: req.session.user //세션 req.session.user = req.body.id;  이런식으로 나중에 넣기!
       content: req.body.content,
       hit: 0      //글조회 페이지ejs에 함수로 넣어서 클릭하면 조회수올라가게!하고 ejs에서 컨트롤러쪽으로 요청보내면 컨트롤러에서 조회수 올리도록..(?) 날짜올라가는거 전에 배운거~~  req.body서버로 보낸거 응답개수랑 ejs에서 title,content처럼 보내준 갯수랑 일치해야되는거임.
                   //id랑 hit은 서버에서 보내주고있는값이아니라 알아서 들어오기때문에 안맞춰줘도 됨 
    }
    if ( req.file ) data["filename"] = req.file.filename;
    // req.file 이 있다는 것은 파일을 업로드했다는 것
    // let data라는 객체 안에 req.file 이 있으면, 즉 파일을 업로드했으면, data 라는 객체에 filename 이라는 key로 req.file.filename( 내가 업로드한 파일 이름 ) 을 넣어서 만들어라.
    Board.create(data)
    .then((result)=>{
       res.send(String(result));
   })
}
exports.read = (req,res) => {
    Board.increment({hit: 1}, {where: {number: req.query.number}}); //조회수 증가시키는 코드 
    Board.findOne({
        where : { 
            number: req.query.number
           
        } 
    })
    .then((result) => {
        res.render("readBoard", {data: result });
    })
    
}

exports.delete = (req, res) => {
    Board.destroy({
        where: { number: req.body.number }
    })
   .then((result)=>{
         console.log(result);
         res.send(true);
   })
}


// exports.update = (req,res) => {
//     res.render("updateBoard");
// }


exports.update_number = (req,res) => { //리드보드에서 업데이트보드로 /user/update?number=<%=data.number%>에서 ?뒤에있는 부분 넘겨주는 방법임.
    console.log( req.query.number );
    Board.findOne({
        where : { 
            number: req.query.number //튜플에 있는 number에 맞는 게시글을 하나 가져온다
           
        } 
    })
    .then((result) => {
        console.log(result)
        res.render("updateBoard", {data: result }); //업데이트보드에 데이터를 결과로 뿌려준다
    })
    
}

exports.update = (req, res) => {
    console.log( "user+_update");
    console.log('test', req.file);
    let data = {
        title: req.body.title,
        id : req.body.id,
        content : req.body.content
    }
    if ( req.file ) data["filename"] = req.file.filename;

    Board.update(data, {
        where: {number: req.body.number}
    })
    .then((result)=>{
        console.log(result);
        // res.send({path: req.file.path}); 이건 파일 이미지를 보여줄때 사용하는 방법 
        // res.send({result: result, path: req.file.path}); send로 두개보내는법
        res.send(result); //업데이트보드에서 수정버튼누르고나서 진행될 동작들~~~    //데이터가 타이틀,아이디,컨텐츠,넘버 총 4갠데 ejs upate함수에서 data에 넘버 빼먹어서 오류났었음 
    })
}


