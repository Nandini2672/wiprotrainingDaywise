
function separateFirstRest(first, ...rest) {
    return { first, rest };
}


const result = separateFirstRest(10, 20, 30, 40, 50);

document.getElementById("output").textContent = 
    `First: ${result.first}, Rest: [${result.rest.join(", ")}]`;
