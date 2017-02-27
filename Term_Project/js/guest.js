/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: guest.js
Date: 12/08/2015
Description: Load guest name from JS methods
*/

/* Load guest name */
function loadGuest() {
	var w = 'Welcome';
	var t = 'To';
	var s = 'My Site';
	var guest=prompt('Please, enter your name','');
	var Confirm=confirm('Please, confirm '+guest+' is your name');
	if(Confirm && guest!=null) {
    alert(guest+', nice to meet you');
		var h = 'Hello, '+guest;
    document.write('<div id="guest"><p>'+h+'</p></div><div id="welcome"><p>'+w+'</p></div><div id="guest"><p>'+t+'</p></div><div id="guest"><p>'+s+'</p></div>');
  } else {
		loadGuest();
	}
}