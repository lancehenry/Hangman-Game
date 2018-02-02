// An array of Super Mario Bros. characters for hangman
var wordList = [
    "mario",
    "luigi",
    "toad",
    "peach",
    "yoshi",
    "bowser",
    "birdo",
    "koopa",
    "wart",
    "wario",
    "waluigi",
    "kamek"
];

// Maximum number of guesses
var maxTries = 10;

// Stores the letters the user guesses
var lettersGuessed = [];

// Word to build to match the current word
var word = [];

// 'Press any key to try again'
var gameFinish = false;

// Win total
var wins = 0;

// Loss total
var losses = 0;

// Stores the underscores to replace the random word selected
var solution = [];

var userGuess = [];

// Selects random word from array
var word = wordList[Math.floor(Math.random() * wordList.length)];

// // Replaces word with underscores
// for (var i = 0; i < word.length; i++) {
//     solution[i] = "_";

    // On Key Up function
    document.onkeyup = function (event) {
        var solution = String.fromCharCode(event.keyCode).toLowerCase();

        if (lettersGuessed.indexOf(userGuess) < 0 && word.indexOf(userGuess) >= 0) {
            lettersGuessed[lettersGuessed.length] = userGuess;
            maxTries--;
        }

        if (word == userGuess) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = [];
            word = wordList[Math.floor(Math.random() * wordList.length)];
        }

        if (maxTries == 0) {
            losses++;
            maxTries = 10;
            lettersGuessed = [];
            word = wordList[Math.floor(Math.random() * wordList.length)];
        }

        var html =
            "<p>You chose: " + userGuess + "</p>" +
            "<p>Remaining Guesses: " + maxTries + "</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    };


console.log(solution);