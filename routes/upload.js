 var data = require("../data.json");

exports.viewUpload = function(req, res){
	data['viewUploadAlt'] = true;
    res.render('upload', {"pictures": data});
};

exports.viewUploadAlt = function(req, res){
	data['viewUploadAlt'] = false;
	res.render('upload', {"pictures": data})
}