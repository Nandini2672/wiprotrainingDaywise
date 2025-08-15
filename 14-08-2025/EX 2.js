
const doubleNumbers = (arr) => arr.map(num => num * 2);

let numbers = [1, 2, 3, 4, 5];


let doubled = doubleNumbers(numbers);


document.getElementById("result").textContent = "Doubled Numbers: " + doubled.join(", ");





