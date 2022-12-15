const { Board } = require("../model");

exports.index = (req,res) => {
    // res.render("list", {data: result });

    Board.findAll({
        order: [["number", "DESC"]],
    })
    .then((result) => {
        res.render("list", {data: result });
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
    res.render("write");
}

exports.write_data = (req, res) => {
    let data = {
      
       title: req.body.title,
       id: req.body.id,
       content: req.body.content,
       date: req.body.date,
       hit: req.body.hit

    }
    Board.create(data)
    .then((result)=>{
       console.log(result);
       res.send(String(result));

   })
}