"use strict";
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng", "esp"],
		programmingLangs: {
			js: "20%",
			php: "10%",
			python: "30%"
		},
		exp: "1 month",
	},
	showAgeAndLangs: function(plan) {
		console.log(`Мне ${plan.age} лет и я владею языками: ${plan.skills.languages.join(" ").toUpperCase()}`);
	}
};

function showExperience(plan) {
	const{exp} = plan.skills;
	return exp;
}

function showProgrammingLangs(plan) {
	const {programmingLangs} = plan.skills;
	let responce = [];
	for (let key in programmingLangs) {
		responce.push(`Язык ${key} изучен на ${programmingLangs[key]}`);
	}
	return responce.join("\n");
	
}

// console.log(showProgrammingLangs(personalPlanPeter));
personalPlanPeter.showAgeAndLangs(personalPlanPeter);



