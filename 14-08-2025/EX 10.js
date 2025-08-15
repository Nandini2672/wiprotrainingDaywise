
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}


const total = sumNumbers(5, 10, 15, 20);

document.getElementById("sumResult").textContent = 
    `Sum of numbers: ${total}`;
