/*
Задача:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:

fib(4) => "0 1 1 2"

fib(7) => "0 1 1 2 3 5 8"

fib('7') => ""

fib(1) => "0"

fib(0) => ''"
*/
// const fib = function(count) {
// 	let response = "0 1";
// 	let firstNum = 0;
// 	let secondNum  = 1;
// 	if (!Number.isInteger(count) || count === 0) {
// 		return "_";
// 	} else if (count === 1) {
// 		return String(firstNum);
// 	} else 	if (count === 2) {
// 		return response;
// 	} else {
// 		for (let i = 2; i < count; i++) {
// 			let thirdNum = firstNum + secondNum;
// 			response += (" " + thirdNum);
// 			firstNum = secondNum;
// 			secondNum = thirdNum;
// 		}
// 	}
// 	console.log(typeof(response));
// 	return response;	
// };

// console.log(fib(5));


let obj = {
	a: 1,
	b: 2,
	c: {
		"one": 111,
		"two": 222
	}
};

// function copy(object) {
// 	let copyObj = {};
// 	for (let key in object) {
// 		copyObj[key] = object[key];
// 	}
// 	return copyObj;
// };
// const objCopie = copy(obj);

// console.log(obj);

// objCopie.a = 111;
// objCopie.c.one = 1010;
// console.log(objCopie);
// console.log(obj);

// const obj2 = copy(obj);
// console.log(`Kopie of obj: ${obj2}`);

const newObj = Object.assign({}, obj);
newObj.a = 111;
newObj.c.one = 1;

console.log(newObj);
console.log(obj);

const arr = [1, 2, 3, 4];
const newArr = [...arr];
newArr[0] = 10;
console.log(newArr);

const superNewObj = {...obj};
superNewObj.b = 33;
console.log(superNewObj);