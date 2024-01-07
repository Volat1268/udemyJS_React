/* eslint-disable no-debugger */
"use strict";

// function hello() {
// 	console.log("Hello World");
// }

// hello();

// function hi() {
// 	console.log("Say hi!");
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
// 			sorted = arr.sort(compareNum);


// function compareNum(a, b) {
// 	return a - b;
// }

// console.log(sorted);

function createCounter() {
	let counter = 0;

	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};

	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);