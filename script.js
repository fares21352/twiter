// get the html elenents ; quote text, button
const quoteText = document.getElementById("quotecd");
const button = document.getElementById("right-arrow");
const asm = document.getElementById("author");
// on click event listener check
button.addEventListener("click", displayData);


var index = 0;

function displayData () {
   if ( index >= messages.length) {
    index = 0
 }
   quoteText.innerText = messages[index].texte
    index = index + 1

    //  get the lenght of the array
    console.log(messages);
    asm.innerText = messages [index].auteur


    // if the index is bigger than the array
    // set the array to 0
}
// increment index  by one

// get the author and the quote from the msgs array


const messages = [
    { texte: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", auteur: "Christian D. Larson"},
    { texte: "The only way to do great work is to love what you do.", auteur: "Steve Jobs" },
    { texte: "Success is not final, failure is not fatal: It is the courage to continue that counts.", auteur: "Winston S. Churchill"},
    { texte: "The future belongs to those who believe in the beauty of their dreams.", auteur: "Eleanor Roosevelt" },
    { texte: "Don't watch the clock; do what it does. Keep going.", auteur: "Sam Levenson" }
  ];
