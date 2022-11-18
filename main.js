"use strict";

const button = document.getElementById("button");
const input = document.getElementById("input");
const resultBox = document.getElementById("result");

function getMovie(movie)

{console.log(movie);
    // Objekt för att hantera AJAX
var omdbAPI = new XMLHttpRequest();
// Den URL vi ska använda oss av (obs. att denna har förvalt "the revenant")
var omdbURL = `http://www.omdbapi.com/?t=${movie}&type=movie&apikey=41059430`;
  //"http://www.omdbapi.com/?t=the%20revenant&type=movie&apikey=41059430";
// Vad vill vi göra när vi fått ett svar?
omdbAPI.addEventListener("load", function () {
  // Konvertera resultatet från JSON
  var result = JSON.parse(this.responseText);
  // Skriv ut resultatet
  console.log(result);


const resultText = `
<h1>Titel:${result.Title}</h1>
<h3>Genre:${result.Genre}</h3>
<p>Releasedatum:${result.Released}</p>
<p>Regissör:${result.Director}</p>
`;

if (result.Response === "False") {
  alert("Filmen finns ej i databasen!");
  return;
};



resultBox.innerHTML = resultText;

});



// Ange vilken metod (get) samt URL vi ska skicka med
omdbAPI.open("get", omdbURL, true);
// Skicka förfrågan
omdbAPI.send();}


function buttonClick() {
  if (input.value.length === 0){
    alert("Rutan är tom!");
    return;
  };
   
  



  const movieInput = input.value;

    getMovie(movieInput);
  input.value = "";
}

button.addEventListener("click", buttonClick);

