 var data = require("../data.json");

exports.addFriend = function(request, response) {
 // Your code goes here
 json = {'picture': "meme1.png",'description': "#cs"};
 console.log("cs");
 console.log(json);
 data.memes.push(json);
 response.render('index', data);
}
