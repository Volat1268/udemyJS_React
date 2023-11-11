"use strict";

/*
Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
*/

const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Sam", "Takesi", "Somebody"];

function sortStudentsByGroups(arr) {
	arr.sort();
	let sortedStudents = [];
	for (let i = 0; i < 3; i++) {
		const threeStudents = arr.splice(0, 3);
		sortedStudents.push(threeStudents);
	}
	let restStudents = "";
	if (arr.length === 0) {
		restStudents = "-";
	} else {
		restStudents = arr.join(", ");
	}
	sortedStudents.push(`Оставшиеся студенты: ${restStudents}`);
	return sortedStudents;
}

console.log(sortStudentsByGroups(students));

