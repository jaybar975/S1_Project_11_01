/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

/*Store the current time */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

/* Display the current time */
document.getElementById("timeStamp").innerHTML = timeStr;

/*determine which sky map to show in the web page */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = ((2 * thisMonth) + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);