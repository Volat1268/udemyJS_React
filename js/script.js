"use strict";

const box = document.getElementById("box"), 
			circles = document.querySelectorAll(".circle"), 
			hearts = document.querySelectorAll(".heart"), 
			buttons = document.getElementsByTagName("button"), 
			oneHeart = document.querySelector(".heart"),
			wrapper = document.querySelector(".wrapper");
			

const newDiv = document.createElement("div");
newDiv.classList.add("black");
wrapper.append(newDiv);
newDiv.style.cssText = "width: 300px; height: 300px";
newDiv.innerHTML = "<h1>Hello, World!</h1>";
newDiv.insertAdjacentHTML("afterbegin", "<h2>It's me!</h2>");
newDiv.insertAdjacentHTML("beforeend", "<h2>This is the end!</h2>");