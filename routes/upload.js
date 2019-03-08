 var data = require("../data.json");

exports.viewUpload = function(req, res){
    res.render('upload');
};

exports.viewUploadAlt = function(req, res){
	res.render('upload', viewUploadAlt)
}