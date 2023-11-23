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

function getTotalProgressByItaration(data) {
	let total = 0;
	let students = 0;


	return total / students;
}

console.log(getTotalProgressByItaration(students));