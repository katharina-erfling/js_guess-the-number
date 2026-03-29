const jsConfetti = new JSConfetti();

const headline = document.getElementById('headline');
const displayTries = document.getElementById('displayTries');
const myNumber = document.getElementById('myNumber');

let numberToGuess = Math.round(Math.random() * 19) + 1;
let tries = 0;

function guessTheNumber() {
    tries++;
    displayTries.innerHTML = 'Versuche: ' + tries;
    
    if(numberToGuess === Number(myNumber.value)) {
        headline.innerHTML = `Du hast mit ${tries} Versuchen gewonnen! 🥳🪅🎊`;
        jsConfetti.addConfetti();
    }

    if(numberToGuess > Number(myNumber.value)) {
        headline.innerHTML = 'Die Zahl ist größer';
    }
    
    if(numberToGuess < Number(myNumber.value)) {
        headline.innerHTML = 'Die Zahl ist kleiner';
    }    

    myNumber.value = '';
}