"use strict";

let URLField = document.getElementById("url");
let queryStringField = document.getElementById("query-string");

let pageURL = document.location;
let docURLObject = new URL(pageURL);
let parsedQueries;

function loadURL() {
	URLField.innerHTML = pageURL;
	queryStringField.innerHTML = docURLObject.search;
	parsedQueries = ParseQueryString();
}

loadURL();

console.log(parsedQueries.getMap());
