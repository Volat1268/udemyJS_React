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
	let totalProgress = 0;
	let studentsQnt = 0;
	for (let value of Object.values(data)) {
		if (Array.isArray(value)) {
			studentsQnt += value.length;
			for (let i = 0; i < value.length; i++) {
				totalProgress += value[i].progress;
			}		
		} else {
			for (let subValue of Object.values(value)) {
				studentsQnt += subValue.length;
				for (let i = 0; i < subValue.length; i++) {
					totalProgress += subValue[i].progress;
				}
			}
			return (totalProgress/studentsQnt);
		}
	}
}

console.log(getTotalProgressByItaration(students));



function getTotalProgressByrecusion(data) {
	if (Array.isArray(data)) {
		let totalProgress = 0;
		for (let i = 0; i < data.length; i++) {
			totalProgress += data[i].progress;
		}
		return [totalProgress, data.length];
	} else {
		let total = [0, 0];
		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByrecusion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}
		return total;
	}
	
}
const result = getTotalProgressByrecusion(students);
console.log(result[0] / result[1]);

function factorial(n) {
	if (!Number.isInteger(n)) {
		return ("not is Integer");
	}
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(3.5));