/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: counter.js
Date: 12/08/2015
Description: Load page counter from set cookie
*/

/* Get cookie */
function getCookie(Name) {
  var cookieValue = '';
  var allCookies = document.cookie;
  var cookieArray = allCookies.split(';');
  for (var i=0; i<cookieArray.length; i++) {
    var cookieName = cookieArray[i];
    while (cookieName.charAt(0)==' ') {
      cookieName = cookieName.substring(1,cookieName.length);
		} 
    if (cookieName.indexOf(Name+'=') == 0) {
      cookieValue = cookieName.substring(Name.length+1,cookieName.length);
    }
	}
  return cookieValue;
}
/* Set cookie */
function setCookie(Name,Value) {
  var currentDate = new Date();
  var expireDate = new Date(currentDate.getFullYear()+1,currentDate.getMonth(),currentDate.getDate());
  document.cookie = Name+'='+Value+';expires='+expireDate.toUTCString();
}
/* Load counter onto webpage */
function loadCounter() {
	var counter = getCookie('BNcounter');
	if(counter == null || counter == -1) {
		counter = 1;
		setCookie('BNcounter',counter);
	} else {
		counter++;
		setCookie('BNcounter',counter);
	}
	var Counter=counter.toString();
	var displayCounter=Counter.fontsize(7);
	document.write("<div><p>Page Counter: <strong>" + displayCounter + "</strong></p></div>");
}
