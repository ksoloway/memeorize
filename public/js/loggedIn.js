$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();

$(".fas fa-heart").hide();

$(".far fa-heart").click(function() {
  $(".far fa-heart").hide();
  $(".fas fa-heart").show(); });
  });
  console.log('working as intended');
});
$('#login-profile-button').click(function(){
  if (sessionStorage.getItem("isLoggedIn") == "false"){
    sessionStorage.setItem("isLoggedIn", "true");
    location.href='login';
  }
});
$('#subjects').click(function(){
        console.log("test");
        location.href='subjects';
    });
$('#help').click(function(){
  location.href='help';
})
 $("#uploadMainButton").click(function(){
     console.log("test");
     location.href='upload';
 });
$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});

$('#login-profile-button').click(function(){
  //e.preventDefault();
  console.log("yo");
  ga('create', 'UA-135898318-1', 'auto');
  ga("send", "event", "like", "click");
  location.href='loggedin';
 });

$('#logout-profile-button').click(function(){
  location.href='login';
 });
