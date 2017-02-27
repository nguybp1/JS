/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: nav.js
Date: 12/08/2015
Description: Load Navigator Menu
*/

/* Set image folder*/
var imgFolder = "img/";

/* Set buttons*/
mOut = new Array("outHome.png","outGallery.png","outSurvey.png","outContact.png","outAbout.png");
mOver = new Array("overHome.png","overGallery.png","overSurvey.png","overContact.png","overAbout.png");

/* Load Nav */
function loadNav() {
  var myHome, myGallery, mySurvey, myContact, myAbout;
  if(document.getElementById('Home')) {
    myHome = '<a href="index.html"><img src="img/overHome.png" id="nav1"></a>';
  } else {
    myHome = '<a href="index.html" onmouseover=mouseOver("1") onmouseout=mouseOut("1")><img src="img/outHome.png" id="nav1"></a>';
  }
  if(document.getElementById('Gallery')) {
    myGallery = '<a href="gallery.html"><img src="img/overGallery.png" id="nav2"></a>';
  } else {
    myGallery = '<a href="gallery.html" onmouseover=mouseOver("2") onmouseout=mouseOut("2")><img src="img/outGallery.png" id="nav2"></a>';
  }
  if(document.getElementById('Survey')) {
    mySurvey = '<a href="survey.html"><img src="img/overSurvey.png" id="nav3"></a>';
  } else {
     mySurvey = '<a href="survey.html" onmouseover=mouseOver("3") onmouseout=mouseOut("3")><img src="img/outSurvey.png" id="nav3"></a>';
  }
  if(document.getElementById('Contact')) {
    myContact = '<a href="contact.html"><img src="img/overContact.png" id="nav4"></a>';
  } else {
    myContact = '<a href="contact.html" onmouseover=mouseOver("4") onmouseout=mouseOut("4")><img src="img/outContact.png" id="nav4"></a>';
  }  
  if(document.getElementById('About')) {
    myAbout = '<a href="about.html"><img src="img/overAbout.png" id="nav5"></a>';
  } else {
    myAbout = '<a href="about.html" onmouseover=mouseOver("5") onmouseout=mouseOut("5")><img src="img/outAbout.png" id="nav5"></a>';
  }
  document.write(myHome+'\n'+myGallery+'\n'+mySurvey+'\n'+myContact+'\n'+myAbout);
}

/* Set Mouse Over */
function mouseOver(imgName) {
	document.getElementById('nav' + imgName).src = imgFolder + mOver[imgName-1];
}

/* Set Mouse Out */
function mouseOut(imgName) {
	document.getElementById('nav' + imgName).src = imgFolder + mOut[imgName-1];
}

