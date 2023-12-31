/*
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/
//------------------- solution to the task 1----------------------------

const getTimeFromMinutes = function(minutes) {
	if (!Number.isInteger(minutes) || minutes < 0) {
		return "Ошибка, проверьте данные";
	} else {
		let hour = Math.trunc(minutes / 60);
		let min = minutes % 60;
		let hourText;
		if (hour === 0 || hour > 4) {
			hourText = "часов";
		} else if (hour === 1) {
			hourText = "час";
		} else {
			hourText = "часа";
		}
		return `Это ${hour} ${hourText} и ${min} минут`;
	}
};

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes(600));
console.log(getTimeFromMinutes(30.54));

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0
У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
*/
//------------------- solution to the task 2----------------------------

const findMaxNumber = function(a, b, c, d) {
	const arr = [a, b, c, d];
	let max = a;
	for (let i = 0; i < 4; i++) {
		if (typeof(arr[i]) !== "number") {
			return 0;
		} else {
			if (arr[i] > max) {
				max = arr[i];
			}
		}		
	}
	return max;
	
};

console.log(findMaxNumber(6.6, 11, 234, 4));
