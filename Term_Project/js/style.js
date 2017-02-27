/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: style.js
Date: 12/08/2015
Description: Set paragraph styles
*/

/* Set paragraph styles */
function changeStyle() {
  var myColor=["red","white","blue","black","green","orange"];
  var myStyle = document.getElementsByTagName("p");
  myStyle[0].style.backgroundColor = myColor[3];
  myStyle[0].style.color = myColor[1];
  myStyle[1].style.backgroundColor = myColor[0];
  myStyle[1].style.color = myColor[2];
  myStyle[2].style.backgroundColor = myColor[5];
  myStyle[2].style.color = myColor[3];
  myStyle[3].style.backgroundColor = myColor[4];
  myStyle[3].style.color = myColor[5];
}