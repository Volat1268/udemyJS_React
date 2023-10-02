/* eslint-disable indent */
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}

	console.log(result);
}

// firstTask();

// Место для второй задачи
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
	const dataOne = [];
    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
		if (data[i] == Number) {
			console.log()
		} 
	}
    
    // Не трогаем
    console.log(dataOne);
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}



const data = [5, 10, 'Shopping', 20, 'Homework']
for (let i = 0; i < data.length; i++) {
	console.log(typeof(data[i]));
	if (typeof(data[i] == "string")) {
		console.log("string==");
	}
	}


    