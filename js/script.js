"use strict";

const box = document.getElementById("box"), 
			circles = document.getElementsByClassName("circle"), 
			hearts = document.querySelectorAll(".heart"), 
			buttons = document.getElementsByTagName("button"), 
			oneHeart = document.querySelector(".heart"), 
			newDiv = document.createElement("newDiv");
box.style.backgroundColor = "green";
box.style.width = "100px";
buttons[2].style.borderRadius = "100%";
buttons[0].style.cssText = "background-color: red; border-radius: 30px; width: 120px; color: black";

for(let i = 0; i < circles.length; i++) {
	circles[i].style.backgroundColor = "yellow";
}

