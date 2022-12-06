const User = require("../model/User");

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = (req,res) => {
    User.post_signup(req.body, function(){
        res.send(true);
    });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = (req,res) => {
    User.post_signin(req.body.id, req.body.pw, function(result){
        if ( result.length > 0 ) res.send(true);  //이거model의 18번재줄 sql문에서 각각아이디랑 비번에 해당하는 행?이 일치하는게있으면 한줄가져오니까 여기서 result.length가 1이되는거고 그럼 트루임!
        else res.send(false);
        console.log( result);
        console.log(result.length);
    });
}

exports.profile = (req,res) => {
    User.get_user(req.body.id, function(result){
        if ( result.length > 0 ) res.render("profile", {data: result[0]}); //배열전체
        else res.redirect("/user/signin");
        console.log(result);
    })
}

exports.profile_edit = (req,res) => {
    User.update_profile(req.body, function(){
        res.send(true);
    })
}
exports.profile_delete = (req,res) => {
    User.delete_user(req.body.id, function(){
        res.send(true);
    })
}