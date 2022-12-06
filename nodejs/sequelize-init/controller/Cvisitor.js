// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model"); //객체구조분해할당 모델의 index.js안에있는 visitor만 가져오겠다 57번째줄. //인덱스.js만 가져오면돼서 폴더까지만 접근하면됨.

exports.visitor = async (req, res) => {
    let result = await Visitor.findAll();     //await뒤에있는게 실행될때까지 기다려라. 그때까진 그 밑에줄을 안ㅇ릭겠다. await뒤에있는게 실행돼서 result에 담기면 그 밑에줄실행 
    // let result = Visitor.findAll();
    res.render("visitor", {data:result});
}

// exports.visitor = (req, res) => {
//     Visitor.findAll()
//     .then((result)=>{
//         console.log(result);
//         console.log("id: ", result[0].dataValues.id); //console.log(result[0].id)이렇게만해도됨 기본적으로 dataValues.라서.
//         res.render("visitor", {data: result});

//     })
    //findAll은 시퀄라이즈안에있는 함수인데, 셀렉트문을 실행한다.  시퀄라이즈는 프로미스 객체임. 셀렉트문이 끝나고 실행됐으면 좋겠는걸 .then쓰고 써주면됨.
    //select * from visitor;을 썻어야했음.

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })


exports.register = (req, res) => {
     let data = {
        name: req.body.name, //키는 컬럼이름이랑 같아야됨.
        comment: req.body.comment
     }
     Visitor.create(data)
     .then((result)=>{
        console.log(result);
        res.send(String(result.id));

    })
}
    //insert into visitor(name, comment) values('${req.body.name}', '${req.body.comment}');
//     Visitor.register_visitor( req.body, function(id){
//         console.log(id);
//         res.send(String(id));
//     })
// }

exports.delete = (req, res) => {
      Visitor.destroy({
          where: { id: req.body.id }
      })
     .then((result)=>{
           console.log(result);
           res.send(true);
     })
}
    //`delete from visitor where ID = ${req.body.id}`;
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
//     Visitor.delete_visitor(req.body.id, function(){
//         res.send(true);
//     })
// }
//어싱크로 바꾸면 
// exports.delete = async (req, res) => {
//     let result= await Visitor.destroy({
//         where: { id: req.body.id }
//     });
//     res.send(true);}

exports.get_visitor_by_id = (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    // Visitor.findAll({ 
    //     where : { id : req.query.id },
    //     limit : 1 
    // })     findall이랑 findone의 차이는 리밋차이  findone은 limit이1임 

    Visitor.findOne({    //select실행하는함수에만 쓸수있는 속성들//
        // attributes: [ "id", "name", "comment"], //= select id, name, comment from visitor
        where : { id : req.query.id },  //id가 req.query.id인것을 찾겠다.이 문장이 select * from visitor where id = req.query.id; 모델에 썼었던 sql문임. 이 거임.
        // order: [["id", "DESC"]],  // select id, name, comment from visitor order by id DESC 내림차순.id를 기준으로.
        // limit: 1 //find all에서 많이 쓰임
    })
    .then((result) => {
        res.send(result);
    })
    
    //select * from visitor where id = req.query.id; 모델에 썼었던 sql문임.
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}


// exports.get_visitor_by_id = (req, res) => {
//     Visitor.findOne({ 
//         where : { id : req.query.id }  
//     })
//     .then((result) => {
//         res.send(result);
//     })
// }  위에거 원래이건데 어싱크로 바꾸면

// exports.get_visitor_by_id = async (req, res) => {
//     let result = await Visitor.findOne({ 
    //     where : { id : req.query.id }
    // }); 
//     res.send(result);
// }


exports.update_visitor = (req, res) => {
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    })
    .then((result)=>{
        console.log(result);
        res.send(true);
    })
}
    // `update visitor set name = '${req.body.name}', comment ='${req.bodycomment}' where ID = ${req.body.ID}`; 
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });

    //저걸어싱크로바꾸면
    // exports.update_visitor = async (req, res) => {
    //     let data = {
    //         name : req.body.name,
    //         comment : req.body.comment
    //     }
    //     let result= await Visitor.update(data, {
    //         where: {id: req.body.id}
    //     });
    //     res.send(true);
    // }