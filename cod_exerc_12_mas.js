/*
3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

Может показать сложной с первого взгляда, но это совсем не так 🙂
*/
const someString = "This is some strange string";

function reverse(str) {
	let reversedString = "";
	for(let letter of str) {
		reversedString = letter + reversedString;
	}
	return reversedString;
}

console.log(reverse(someString));

// function reverse(str) {
// 	let reversedString = "";
// 	for (let key in str) {
// 		let newKey = str.length - 1 - key;
// 		reversedString += str[newKey];
// 	}
// 	return reversedString;	
// }

// console.log(reverse(someString));


/*
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

const allAvailableCurr = baseCurrencies.concat(additionalCurrencies);

// function availableCurr(base, additional) {
// 	if (base.length === 0) {
// 		return "Нет доступных валют";
// 	}
// 	let result = "Доступные валюты:\n";
// 	for(let value of base) {
// 		if (value !== additional) {
// 			result += `${value}\n`;
// 		}
// 	}
// 	return result;
// }

function availableCurr(base, additional) {
	let result = ["Доступные валюты:"];
	base.forEach(function(item) {
		if (item !== additional) {
			result.push(item);
		}
	});
	let curResult = result.join("\n");
	return curResult;
}

console.log(availableCurr(allAvailableCurr, "CNY"));