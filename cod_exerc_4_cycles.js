/* eslint-disable indent */
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}

	// Не трогаем
	console.log(result);
}

firstTask();
