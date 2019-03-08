var data = require('../data.json');
exports.viewLoggedIn = function(req, res){
    data['viewLoggedInAlt'] = true;
    console.log(data['viewLoggedInAlt']);
    res.render('loggedIn', {"pictures": data});
  };

exports.viewLoggedInAlt = function(req, res){
  data['viewLoggedInAlt'] = false;
  console.log(data['viewLoggedInAlt']);
  res.render('loggedIn', {"pictures": data});
}


exports.loginSearch = function(req, res){
  console.log("reached");
  //var str = req.query.search;
  console.log("Before: " + req.query.search)
  //str = str.replace(/\s/g,'')
  var filter = "#" + req.query.search.replace(/\s/g,'');
  console.log("After: " + filter);
  var parsed = data.memes.filter(function (entry) {
    console.log(entry);
    return entry.caption == filter;
  });
  if(filter == "#")
  {
    parsed = data.memes;
  }
  res.render('loggedIn', {"pictures": parsed});
}
