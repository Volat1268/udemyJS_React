// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
	// Пишем решение вот тут
	console.log("version 1 of task1:");
	for (let i = 5; i <= 10; i++) {
		console.log(i);
	}

	console.log("\nversion 2 of task1:");
	let b = 5;
	while(b <= 10) {
		console.log(b);
		b++;
	}

	console.log("\nversion 3 of task1:");
	let c = 5;
	do {
		console.log(c);
		c++;
	} while(c <= 10);
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
	// Пишем решение вот тут
	console.log("version 1 of task 2:");
	for (let i = 20; i >= 10; i--) {
		console.log(i);
		if (i === 13) {
			break;
		}
	}
	console.log("\nversion 2 of task 2:");
	let a2 = 20;
	while(a2 >= 10) {
		console.log(a2);
		if (a2 === 13) {
			break;
		}
		a2--;
	}
	console.log("\nversion 3 of task2:");
	let b2 = 20;
	do {
		console.log(b2);
		if (b2 === 13) {
			break;
		}
		b2--;
	} while(b2 >= 10);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
function thirdTask() {
	// Пишем решение вот тут
	console.log("version 1 of task 3:");
	for (let i = 2; i <= 10; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
	console.log("\nversion 2 of task 3:");
	let a3 = 2;
	while(a3 <= 10) {
		if (a3 % 2 === 0) {
			console.log(a3);
		}
		a3++;
	}
	console.log("\nversion 3 of task 3:");
	let b3 = 2;
	do {
		if (b3 % 2 === 0) {
			console.log(b3);
		}
		b3++;
	} while(b3 <= 10);
}

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	// Пишем решение вот тут
	let i = 2;
	while(i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;			
		} else {
			console.log(i);
			i++;
		}
	}
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers[i - 5] = i;
	}
	console.log(arrayOfNumbers);

	// Не трогаем
	return arrayOfNumbers;
}

firstTask()
secondTask()
thirdTask()
fourthTask()
fifthTask()