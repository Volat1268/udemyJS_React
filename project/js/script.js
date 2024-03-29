/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const promoAdv = document.querySelector(".promo__adv");
console.log(promoAdv);

const textAdv = promoAdv.querySelector(".promo__adv-title");


const promoAdvImgs = document.querySelectorAll(".promo__adv img");

promoAdv.remove();

const promoGenre = document.querySelector(".promo__genre");
console.log(promoGenre);
promoGenre.innerHTML = "DRAMA";

const poster = document.querySelector(".promo__bg");
console.log(poster);
poster.style.backgroundImage = "url(\"img/bg.jpg\")";




