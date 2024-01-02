"use strict";

const a = [1, 2, 3, 4, 5];
// const s = a.splice(1, 2, 11, 12, 13);
// console.log(a);
// console.log(s);

function linearSearch(t, a) {
	let n = a.length, i = 0;
	// a[n] = t;
	while (a[i] !== t) i++;
	if (i < n) {
		return i;
	} else {
		return -1;
	}	
}

console.log(linearSearch(14, a));
