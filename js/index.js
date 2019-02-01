"use strict";

function getAbsUrl(relUrl) {
	let a = document.createElement("a");;
	a.href = relUrl;
	return a.href;	
}

document.body.onload = function() {
	document.getElementById("current-url").innerHTML = getAbsUrl("test.html") + "?";
	return;
}