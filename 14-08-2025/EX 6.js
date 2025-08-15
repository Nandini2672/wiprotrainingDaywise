
const movie = {
    movieName: "Orange",
    movieLanguage: "Telugu",
    Rating: 8.8
};


const { movieName, movieLanguage, Rating } = movie;


document.getElementById("movieDetails").textContent =
    `Movie Name: ${movieName}, Language: ${movieLanguage}, Rating: ${Rating}`;
