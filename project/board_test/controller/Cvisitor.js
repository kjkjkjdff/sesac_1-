const { Board } = require("../model");

exports.index = (req,res) => {
    // res.render("list", {data: result });

    Board.findAll({
        order: [["number", "DESC"]],
    })
    .then((result) => {
        console.log(result)
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
    let data = {
       title: req.body.title,
       id: 'user',     // id: req.session.user //세션 req.session.user = req.body.id;  이런식으로 나중에 넣기!
       content: req.body.content,
       hit: 0      //글조회 페이지ejs에 함수로 넣어서 클릭하면 조회수올라가게!하고 ejs에서 컨트롤러쪽으로 요청보내면 컨트롤러에서 조회수 올리도록..(?) 날짜올라가는거 전에 배운거~~  req.body서버로 보낸거 응답개수랑 ejs에서 title,content처럼 보내준 갯수랑 일치해야되는거임.
                   //id랑 hit은 서버에서 보내주고있는값이아니라 알아서 들어오기때문에 안맞춰줘도 됨 
    }
    Board.create(data)
    .then((result)=>{
       console.log(result);
       res.send(String(result));

   })
}

exports.read = (req,res) => {
    Board.findOne({
        where : { 
            number: req.query.number
           
        } 
    })
    .then((result) => {
        console.log(result)
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
exports.update = (req, res) => {
    let data = {
        title: req.body.title,
        id : req.body.id,
        content : req.body.content
    }
    Board.update(data, {
        where: {number: req.body.number}
    })
    .then((result)=>{
        console.log(result);
        res.render("updateBoard");
    })
}


// exports.update_data = (req,res) => {}