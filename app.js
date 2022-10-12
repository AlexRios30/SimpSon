const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const img = document.getElementById("img");
const nameCharacter = document.getElementById("name-character");
const phrase = document.getElementById("phrase");
const btnGenerate = document.getElementById("generate");

btnGenerate.addEventListener("click", apiFunction);
window.addEventListener("load", apiFunction);

function apiFunction() {
    fetch(URL)
    .then(response => response.json())
    .then(data => (img.src = data[0].image,
        nameCharacter.textContent = data[0].character,
        phrase.textContent = data[0].quote))
}