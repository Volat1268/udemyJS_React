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

const promo_adv = document.querySelectorAll(".promo__adv img");
console.log(promo_adv);
promo_adv.forEach(item => {
	item.remove();
});

const poster = document.querySelector(".promo__bg");
console.log(poster);
poster.style.backgroundImage = "url('img/bg.jpg')";

// const genre = poster.querySelector(".promo__genre");
// genre.textContent = "драма";







