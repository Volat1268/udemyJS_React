"use strict";

// const personalMoviesDB = {
// 	count: 12,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
// const writeYourGenres =  function () {
// 	for (let i = 0; i < 3; i++) {
// 		let yourGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
// 		while (yourGenre == "" || yourGenre == null) {
// 			yourGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
// 		}
// 		personalMoviesDB["genres"][i] = yourGenre;
// 	}
// 	const {genres} = personalMoviesDB;
// 	let counter = 1; 
// 	genres.forEach(function(item) {
// 		console.log(`Любимый жанр № ${counter} - это ${item}`);
// 		counter ++;
// 	});
// };

// writeYourGenres();

const personalMoviesDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const {genres, count, privat} = personalMoviesDB;
console.log(genres, count, privat);

