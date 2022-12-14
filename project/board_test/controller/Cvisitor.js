const { Board } = require("../model");

exports.index = (req,res) => {
    res.render("list");
}