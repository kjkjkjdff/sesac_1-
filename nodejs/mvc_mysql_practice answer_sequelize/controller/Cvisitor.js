// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model"); //객체구조분해할당 모델의 index.js안에있는 visitor만 가져오겠다 57번째줄. //인덱스.js만 가져오면돼서 폴더까지만 접근하면됨.

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}

exports.post_signup = (req,res) => {
    let data = { 
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw
    } 
    Visitor.create(data)
    .then((result)=>{
       console.log(result);
       res.send(true);

   })
}
    
exports.signin = (req,res) => {
    res.render("signin");
}

exports.post_signin = (req,res) => {
    Visitor.findOne({ 
        where : { id : req.body.id ,
                  pw: req.body.pw } 
    })
    .then((result) => {
        console.log(result);
        if ( result ) res.send(true);  
        else res.send(false);
    })
}



   
// let sql = `SELECT * FROM user2 WHERE id='${id}' and pw='${pw}' limit 1;`;

exports.profile = (req,res) => {
    Visitor.findOne({ 
        where : { id : req.body.id
                  } 
    })
    .then((result) => { 
        if ( result) res.render("profile", {data: result});
    else res.redirect("/user/signin");  //findeone이라서 배열로안나와서 걍 result라고쓰기.
});
}
    

// `SELECT * FROM user2 WHERE id='${id}' limit 1;`;


exports.profile_edit = (req,res) => {
    let data = {
        name : req.body.name,
        pw : req.body.pw
    }
    Visitor.update(data, {
        where: {id: req.body.id}
    })
    .then((result)=>{
        console.log(result);
        res.send(true);
    })
}

   

// `UPDATE user2 SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;

exports.profile_delete = (req,res) => {
    Visitor.destroy({
        where: { id: req.body.id }
    })
   .then((result)=>{
         console.log(result);
         res.send(true);
   })
}

   

// `DELETE FROM user2 WHERE id='${id}'`

