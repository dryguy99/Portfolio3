
var myVar;
var startTimer = false;
var tempTime = 0;
var validate = false;

$(document).ready(function () {
  $('#mystart').addClass("dark");
  $('#aboutme').css('display', 'none');
  $('#contactme').css('display', 'none');
  $(document).on('click', '#submit', function () {
    event.preventDefault();
    var email = $('#email').val().trim();
    var name = $('#name').val().trim();
    var message = $('#message').val().trim();
    validateForm(name, email, message);
    if (validate) {
      $('#email').val('');
      $('#name').val('');
      $('#message').val('');
      $.post("http://www.timdry.net/mymail", {name: name, email: email, message: message}, function(result){
          startTimer = true;
          myVar = setInterval(alertFunc, 1000);
          $(".myresult").html(result);
      });
    }
  });
  $(document).on('click', '.mynav', function () {
    var myChoice = $(this).attr('value');
    $(this).parent().addClass("dark");
    $(this).parent().siblings().removeClass("dark");
    $("." + myChoice).css('display', "block");
    $("." + myChoice).siblings().css('display', 'none');
    $('.navagation').css('display', 'block');
  });
});
////////////////////////////////////////////////////////////
// set up alert whether or not an email was sent
function alertFunc() {
  $(".myresult").css('display', 'inline');
  var d = new Date();
  var seconds = d.getSeconds();
  if (startTimer) {
    startTimer = false;
    if (parseInt(seconds) > 54) {
      tempTime = parseInt(seconds) - 60 + 5;
    } else{
      tempTime = parseInt(seconds) + 5;
    }
  } else if (tempTime <= parseInt(seconds)){
    myStopFunction();
  }
}
//////////////////////////////////////////////////////////////
//stop alert
function myStopFunction() {
  clearInterval(myVar);
  $(".myresult").html('');
  $(".myresult").css('display', 'none');
}
//////////////////////////////////////////////////////////////
//validate form
function validateForm(name, email, message){
  if (name.length < 2) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Name must be longer than 2 characters.");
  } else if (!(email.includes('@'))) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (!(email.includes('.'))) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (email.length < 8) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Please enter a valid email address.");
  } else if (message.length < 3) {
    startTimer = true;
    myVar = setInterval(alertFunc, 1000);
    $(".myresult").html("Message must be longer than 3 characters.");
  } else {
    validate = true;
  }
}
