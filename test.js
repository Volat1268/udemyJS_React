"use strict";

const soldier = {
	arm: "canon",
	country: "USA",
	power: 34
};

const franc = {};
franc.__proto__ = soldier;
console.log(franc.country);

const mikle = {};
Object.setPrototypeOf(mikle, soldier);
console.log(mikle.arm);

const nicole = Object.create(soldier);
console.log(nicole.power);

