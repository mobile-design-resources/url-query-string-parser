"use strict";

function QueryMap() {
	let queryMap = new Map();
	
	return Object.freeze({
		getMap: function () {
			return queryMap;
		},
		
		get: function (key) {
			return queryMap.get(key);
		},
		
		set: function (key, value) {
			queryMap.set(key, value);
			return;	
		},
		
		has: function (key) {
			return queryMap.has(key);
		},
		
		keys: function () {
			return queryMap.keys();
		},
	});
}
		
	

function ParseQueryString(docURL = document.location) {
	let docURLObject = new URL(docURL);
	let queryString = docURLObject.search; // get query string part of current document
	let parsedQueries = new QueryMap();
	
	if (queryString === "") { // if there is no query string, just return the "blank" parsedQueries
		return parsedQueries;
	}
	
	queryString = queryString.substring(1); // remove the "?" that comes at the beginning
	
	let queryArray = queryString.split('&'); // first split by '&'	
	for (let i of queryArray) { // then, for every i in queryArray, split by "="
		let tempPair = i.split('=', 2);
		
		if (tempPair.length >= 2) {
			parsedQueries.set(tempPair[0], tempPair[1]);
		}
		else if (tempPair.length === 1) {
			parsedQueries.set(tempPair[0], null);
		}
		else {
			continue;
		}
	}
	
	return parsedQueries;
}
