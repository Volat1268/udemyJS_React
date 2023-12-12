let students = {
	js: [
		{
			name: "John",
			progress: 100
		},
		{
			name: "Ivan",
			progress: 60
		}
	],
	html: {
		basic: [
			{
				name: "Peter",
				progress: 20
			},
			{
				name: "Ann",
				progress: 18
			}
		],
		pro: [
			{
				name: "Sam",
				progress: 10
			}
		]
	}
};

// let total = 0;
// let studentsQnt = 0;
// let value = Object.values(students)[0];
// studentsQnt = value.length;
// console.log(value);
// for (let i = 0; i < value.length; i++) {
// 	total += value[i].progress;
// }
// console.log(total / studentsQnt);

// let value2 = Object.values(students)[1];
// console.log(value2);
// console.log(Object.values(value2));


function getTotalProgressByItaration(data) {
	let total = 0;
	let students = 0;
	for (let value in Object.values(data)) {
		if (Array.isArray(value)) {
			students += value.length;
			console.log(students);
		}
	}
	
}



getTotalProgressByItaration(students);