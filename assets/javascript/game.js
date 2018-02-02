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

// Selects random word from array
var word = wordList[Math.floor(Math.random() * wordList.length)];

// Replaces word with underscores
for (var i = 0; i < word.length; i++) {
    solution[i] = "_";
}

console.log(solution);