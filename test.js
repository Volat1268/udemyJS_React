"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	if (arr.length == 0) {
		return "Семья пуста";
	} else {
		return `Семья состоит из: ${arr.join(" ")}`;
	}
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	arr.forEach((value) => {
		console.log(value.toLowerCase());
	});
}


console.log(showFamily(family));
standardizeStrings(favoriteCities);