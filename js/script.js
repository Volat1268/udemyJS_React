"use strict";

const box = document.getElementById("box"), 
			circles = document.querySelectorAll(".circle"), 
			hearts = document.querySelectorAll(".heart"), 
			buttons = document.getElementsByTagName("button"), 
			oneHeart = document.querySelector(".heart");

box.style.background = "blue";
circles[0].style.background = "red";
hearts[1].style.background = "green";

// for (let i = 0; i < circles.length; i++) {
// 	circles[i].style.width = "120px";
// };

hearts.forEach(item => {
	item.style.background = "blue";
});

circles.forEach(item => {
	item.style.cssText = "background-color: red; width: 120px";
});