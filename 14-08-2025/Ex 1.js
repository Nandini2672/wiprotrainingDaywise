
let numbers = [10, 20, 30, 40, 50];


let sumArray = (arr) => arr.reduce((total, num) => total + num, 0);

document.getElementById("result").textContent = "Sum: " + sumArray(numbers);
