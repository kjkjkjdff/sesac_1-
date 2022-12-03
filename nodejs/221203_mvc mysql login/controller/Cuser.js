const User = require("../model/user");

exports.login = (req, res)=>{
    res.render("login");
}

exports.register = (req, res) => {
  
        res.render("register");
        
    }
exports.register2 = (req, res) => {
    User.register_visitor2 (req.body, function(info){
            console.log(info);
            res.send("회원가입 성공");
        })
    }

 
