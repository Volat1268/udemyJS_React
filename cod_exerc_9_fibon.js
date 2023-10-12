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
const fib = function(count) {
	let response = "0 1";
	let firstNum = 0;
	let secondNum  = 1;
	if (typeof(count) != "number" || count === 0) {
		return "_";
	} else if (count === 1) {
		return String(firstNum);
	} else 	if (count === 2) {
		return response;
	} else {
		for (let i = 2; i < count; i++) {
			let thirdNum = firstNum + secondNum;
			response += (" " + thirdNum);
			firstNum = secondNum;
			secondNum = thirdNum;
		}
	}
	console.log(typeof(response));
	return response;	
};

console.log(fib(10));