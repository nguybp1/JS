/*
Student: Brandon Nguyen
Professor: George Cooke
Course: CTS2852C
Project: Individual Prject
File: gal.js
Date: 12/08/2015
Description: Load image window with name of image instead just button name
*/

/* Image Window */
function newWindow(imgname) {
  var myGal=['Cloud_Sunset_Sunrise','Mountains_Autumn_Trees','Green_Chile_Mountain','Green_Water_Mountains','England_Bridge_River','Nature_Mountain_Lake','Water_Mountains_Nature','Yosemite_National_Park'];
  var newWindow;
  /* Open new window containing image */
  newWindow = open('','dynamicWindow','toolbar=0,location=0,status=no,width=820,height=710,resizable=0');
  /* Open window */
  newWindow.document.open();
  /* Produce html tags on opened window */
  newWindow.document.write('<!doctype html><html><head>');
  newWindow.document.write('<meta charset=\"utf-8\">');
  /* Link external style sheet on opened window */
  newWindow.document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\">');
  /* Site Tile on opened window */
  newWindow.document.write('<title>CTS2852C - Individual Project</title>');
  newWindow.document.write('</head><body>');
  /* Page Tile on opened window */
  newWindow.document.write('<h3>'+myGal[imgname-1]+'</h3>');
  /* Form for closed button on opened window */
  newWindow.document.write('<form name=\"myForm\"><input type=\"button\" value=\"Close Window\" onclick=\"window.close();\"/></form>');
  newWindow.document.write('<p></p>');
  /* Image source on opened window */
  newWindow.document.write('<img src=\"img/'+myGal[imgname-1]+'.jpg\" alt=\"'+myGal[imgname-1]+'\" width=\"800\" height=\"600\" />');
  /* Close html tags on opened window */
  newWindow.document.write('</body></html>');
  /* Close window */
  newWindow.document.close();
  /* Focus on opened window */
  newWindow.focus();
}
