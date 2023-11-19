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

const promoImg = promoAdv.querySelectorAll("img");
console.log(promoImg);
promoImg.forEach(item => {
	item.remove();
});

const promoTitle = promoAdv.querySelector(".promo__adv-title");
promoTitle.textContent = "Рекламы больше нет";

const promoContent = document.querySelector(".promo__content");
console.log(promoContent);

const promoBg = promoContent.querySelector(".promo__bg");
console.log(promoBg);
promoBg.style.background = "url('./img/bg.jpg')";

promoContent.querySelector(".promo__genre").textContent = "драма";

promoContent.getElementsByClassName("promo__title")[0].textContent = "Marsianin";

const ratings = promoContent.querySelectorAll(".promo__ratings span");
ratings[0].textContent = "IMDb: 99.0";
ratings[1].textContent = "Кинопоиск: 9.9";

const {movies} = movieDB;
const moviesSorted = movies.sort()
console.log(moviesSorted);

const moviesList = document.querySelector(".promo__interactive ul");
console.log(moviesList);
moviesList.textContent = "";

moviesSorted.forEach(function (value, index) {
	moviesList.innerHTML += `<li class="promo__interactive-item">${index + 1} ${value}<div class="delete"></div></li>`;
});

const logo = document.querySelector(".header__logo");
logo.innerHTML = "<img src='icons/star.svg' alt='logo'>";
console.log(logo);







