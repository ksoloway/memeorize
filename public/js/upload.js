$(document).ready(function() {
  $("#cancel").click(function(){
      console.log("testcancel");
      location.href='/';
  });

  $("#upload").click(function(){
    ga('create', 'UA-135898318-1', 'auto');
    ga("send", "event", "like", "click");
    console.log(document.getElementById("uploadedImg").src);
    console.log($("#memeSubject option:selected").text());
    json = {
      picture: document.getElementById("uploadedImg").src,
      caption: $("memeSubject").val()
    }
    data.memes.push(json);
  });

  $('#help').click(function(){
  location.href='help';
});
  $('#login-profile-button').click(function(){
  location.href='loggedin';
 });
});
