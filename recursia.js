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


let totalProgress = 0;
let studentsQnt = 0;
for (let value of Object.values(students)) {
	if (Array.isArray(value)) {
		studentsQnt += value.length;
		for (let i = 0; i < value.length; i++) {
			totalProgress += value[i].progress;
		}
		console.log(studentsQnt, totalProgress);
	} else {
		for (let subValue of Object.values(value)) {
			studentsQnt += subValue.length
			for (let i = 0; i < subValue.length; i++) {
				totalProgress += subValue[i].progress;
			}
		}
		console.log(studentsQnt, totalProgress, totalProgress/studentsQnt);
	}
}
// function getTotalProgressByItaration(data) {
// 	let total = 0;
// 	let students = 0;
// 	for (let value of Object.values(data))


// 	return total / students;
// }

// console.log(getTotalProgressByItaration(students));