/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: form.js
Date: 12/08/2015
Description: Check and valid fields in form
*/

var pwd, pwd2;
var formCheck = 0;
/* Check username */
function nameCheck() {
  var userRegex = new RegExp('^[A-Za-z0-9]{6,20}$');
  var user = document.getElementById('username');
  var userValid = document.getElementById('username2');
  if (userRegex.test(user.value)) {
    userValid.innerHTML = '<strong>Valid Username!!</strong>';
    formCheck++;
  } else {
    userValid.innerHTML = '<strong>Try again!</strong>';
  }
}
/* Check password */
function pwdCheck() {
  var strongPwd = new RegExp('^(?=.{8,})((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)).*$');
  var midPwd = new RegExp('^(?=.{6,})((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])).*$');
  var strength = document.getElementById('meter');
  pwd = document.getElementById('password');
  if (strongPwd.test(pwd.value)) {
    strength.innerHTML = '<strong>Strong!!</strong>';
    formCheck++;
  } else if (midPwd.test(pwd.value)) {
    strength.innerHTML = '<strong>Medium!!</strong>';
    formCheck++;
  } else {
    strength.innerHTML = '<strong>Weak!</strong>';
  }
}
/* Check password match */
function pwdMatch() {
  var match = document.getElementById('meter2');
  pwd2 = document.getElementById('password2');
  if (pwd2.value == pwd.value) {
    match.innerHTML = '<strong>Matched!!</strong>';
    formCheck++;
  } else {
    match.innerHTML = '<strong>Try again!</strong>';
  }
}
/* Check email */
function mailCheck() {
  var mailRegex = new RegExp('^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,4}$');
  var mail = document.getElementById('email');
  var mailValid = document.getElementById('email2');
  if (mailRegex.test(mail.value)) {
    mailValid.innerHTML = '<strong>Valid Email!!</strong>';
    formCheck++;
  } else {
    mailValid.innerHTML = '<strong>Try again!</strong>';
  }  
}
/* Update comment count */
function updateCommentCount() {
  document.myForm.Comment_Count.value = document.myForm.Comments.value.length;
}
function formValid() {
  if(formCheck < 5) {
    alert('Please, enter all correct info');
    return false;
  }
}