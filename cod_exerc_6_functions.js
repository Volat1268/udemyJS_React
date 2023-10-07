"use strict";
// 1) Создайте функцию, которая будет на вход принимать 
// 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 
// В решении вызывать функцию не нужно, программа сделает это за вас.
function sayHello(name) {
	let greeting = `Привет, ${name}!`;
	return greeting;
}

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа 
// и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
function returnNeighboringNumbers(num) {
	const neghborNumbers = [];
	let numInMassive = num - 1;
	for (let i = 0; i < 3; i++) {
		neghborNumbers[i] = numInMassive;
		numInMassive++;
	}
	return neghborNumbers;
}

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
// Первое число - это база, второе число - это сколько раз нужно будет повторить 
// это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку 
// (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
// разделенные тремя дефисами "---". После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать 
// просто первый аргумент. (Проверяем через оператор typeof)
// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
function getMathResult(base, repeat) {
	const placholder = "---";
	let start = base;
	let result = "";
	if (typeof(repeat) !== "number" || repeat <= 0) {
		return base;
	} else {
		for (let i = 1; i < repeat; i++) {
			let interimResult = start + placholder;
			result += interimResult;
			start += base;
		}
		result += start;
		return result;
	}
}


function getMathResult2(base, repeat) {
	let result = String(base);
	let num = base;
	const placholder = "---";
	if (typeof(repeat) !== "number" || repeat <= 0) {
		return base;
	} else {
		for (let i = 1; i < repeat; i++) {
			num += base;
			result += (placholder + num);
		}
		return result;
	}
}


function getMathResult1(num, times) {
	if (typeof(times) !== "number" || times <= 0) {
		return num;
	}

	let str = "";

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}

	return str;
}
console.log(getMathResult(3, 1));
console.log(getMathResult2(3, 1));
console.log(getMathResult1(3, 1));


