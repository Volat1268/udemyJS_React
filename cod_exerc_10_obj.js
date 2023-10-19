const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%",
		},
		exp: "1 month",
	},
	showAgeAndLangs: function(data) {
		console.log(`Мне ${data.age} лет и я владею языками: ${data.skills.languages.join(" ").toUpperCase()}`);
	}
};

/*
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно
*/
// function showExperience(data) {
// 	const {exp} = data.skills;
// 	return exp;
// }

// console.log(showExperience(personalPlanPeter));

/*
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.
*/

// function showProgrammingLangs(data) {
// 	const {programmingLangs} = data.skills;
// 	let response = "";
// 	for (let key in programmingLangs) {
// 		response += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}
// 	return response;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

/*
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'
Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.
*/

personalPlanPeter.showAgeAndLangs(personalPlanPeter);
