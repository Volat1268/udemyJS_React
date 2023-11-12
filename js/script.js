"use strict";

const box = document.getElementById("box"), 
			circles = document.getElementsByClassName("circle"), 
			hearts = document.querySelectorAll(".heart"), 
			buttons = document.getElementsByTagName("button"), 
			oneHeart = document.querySelector(".heart"), 
			newDiv = document.createElement("newDiv");

box.style.background = "green";
circles[0].style.cssText = "background-color: red; width: 100px; height: 100px";
for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.width = "200px";
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].style.cssText = "width: 30px; border-radius: 100%; color: red";
}