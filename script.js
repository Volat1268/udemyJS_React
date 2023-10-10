/* eslint-disable no-mixed-spaces-and-tabs */
"use strict";

// =============================== Part 1 =======================================
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	- count - сюда передается ответ на первый вопрос
	- movies - в это свойство поместить пустой объект
	- actors - тоже поместить пустой объект
	- genres - сюда поместить пустой массив
	- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	- 'Один из последних просмотренных фильмов?'
	- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	movies: {
		'logan': '8.1'
	}

Проверить, чтобы все работало без ошибок в консоли */

// ------------------------- Part 1. Solution ---------------------------------
/*let numberOfFilms;

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};*/

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

// let filmSeenFirstName = prompt("Один из последних просмотренных фильмов?", ""),
//     filmSeenFirstRate = prompt("На сколько оцените его?", "");
// personalMoviesDB.movies[filmSeenFirstName] = filmSeenFirstRate;
// filmSeenFirstName = prompt("Один из последних просмотренных фильмов?", "");
// filmSeenFirstRate = prompt("На сколько оцените его?", "");
// personalMoviesDB.movies[filmSeenFirstName] = filmSeenFirstRate;

// switch (numberOfFilms) {
// case 5:
//     console.log("malo very");
//     break;
// case 2:
//     console.log("tolko 2");
//     break;
// default:
//     console.log("OK");
// }

// ================================= Part 2 ========================================
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// ------------------------- Part 2. Solution ---------------------------------
/*
let numberOfFilms;

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
personalMoviesDB["count"] = numberOfFilms;

for (let i = 0; i < 2; i++) {
	const filmSeenName = prompt("Один из последних просмотренных фильмов?", ""),
		filmSeenRate = prompt("На сколько оцените его?", "");
	if (
		filmSeenName !== null &&
		filmSeenRate !== null &&
		filmSeenName !== "" &&
		filmSeenRate !== "" &&
		filmSeenName.length < 50
	) {
		personalMoviesDB["movies"][filmSeenName] = filmSeenRate;
	} else {
		i--;
	}
}

if (personalMoviesDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
	alert("Вы классический зритель");
} else {
	alert("Вы киноман");
}

console.log(personalMoviesDB);
*/

// ================================= Part 3 ========================================

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// ------------------------- Part 3. Solution ---------------------------------
let numberOfFilms;

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

// __________solution task 1_______________
function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
	while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");			
	}
	personalMoviesDB["count"] = numberOfFilms;
}


// __________solution task 2______________
function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMoviesDB);
	}
}


// __________solution task 3______________
function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let yourGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
		while(yourGenre == "" || yourGenre == null) {
			yourGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
		}
		personalMoviesDB["genres"][i] = yourGenre;
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const filmSeenName = prompt("Один из последних просмотренных фильмов?", ""),
			filmSeenRate = prompt("На сколько оцените его?", "");
		if (
			filmSeenName !== null &&
      filmSeenRate !== null &&
      filmSeenName !== "" &&
      filmSeenRate !== "" &&
      filmSeenName.length < 50
		) {
			personalMoviesDB["movies"][filmSeenName] = filmSeenRate;
		} else {
			i--;
		}
	}
}

function detectPersonalLevel() {
	if (personalMoviesDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
		alert("Вы классический зритель");
	} else {
		alert("Вы киноман");
	}
}

start();
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB(personalMoviesDB.privat);



// alert("I'm working");
