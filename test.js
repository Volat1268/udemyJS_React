const arr1 = [1, 2, 3, 4];
const arr2 = [11, 22, 33, 44];
const allArr1 = [...arr1, ...arr2];
const allArr2 = [].concat(arr1, arr2);
const allArr3 = arr1.concat(arr2);
arr1.push(...arr2);


console.log(allArr1);
console.log(allArr2);
console.log(allArr3);
console.log(arr1);

