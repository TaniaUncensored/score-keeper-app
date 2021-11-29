let totalGames = document.querySelector("#dropdown");

// button selection
let button1 = document.querySelector("#plusOneButton1");
let button2 = document.querySelector("#plusOneButton2");
let reset = document.querySelector("#resetButton");
let nrOfGames = 0;

//start score variables
let startScore1 = 0;
let startScore2 = 0;

// EXAMPLE OF DIFFERENCE BETWEEN VAR++ AND ++VAR
// console.log(`var++ ${startScore2++}`);
// console.log(startScore2);
// startScore2 = 0;
// console.log(startScore2);
// console.log(`++var ${++startScore2}`);

// score overview selection
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");

// create the text element that will show the winner
let h2 = document.createElement("h2");

// div that we will add the winner text element to
let divWinner = document.querySelector("#winner");

// toggle button selection
let toggle = document.querySelector("#flexSwitchCheckDefault");


//START ADD EVENT LISTENERS/BUTTONS
// keep track of amount of games that will be played
totalGames.addEventListener("change", function () {
    nrOfGames = totalGames.value;
});

// button player one updates the score on the left
button1.addEventListener("click", function () {
    score1.innerHTML = `${++startScore1} `;
    checkForWinner();
});

// button player two updates the score on the right
button2.addEventListener("click", function () {
    score2.innerHTML = ` ${++startScore2}`;
    checkForWinner();
});

// reset the scores
reset.addEventListener("click", function () {
    resetScore();
});

// toggle
function changeMode(){
    let bodyElement = document.querySelector(".card");
    bodyElement.classList.toggle("darkmode");
}

toggle.addEventListener("change", function () {
    if (toggle.checked) {
        changeMode();
    } else {
        changeMode();
    };
});
// END ADD EVENT LISTENERS/BUTTONS


// START FUNCTIONS
// check if someone won and print out who won
function checkForWinner() {
    if (startScore1 == totalGames.value) {
        appendVictoryText(" one");
        resetScore();
    } else if (startScore2 == totalGames.value) {
        appendVictoryText(" two");
        resetScore();
    }
}
// auto reset the score when the max score is reached
function resetScore() {
    score1.innerHTML = `${0} `;
    score2.innerHTML = ` ${0}`;
    startScore1 = 0;
    startScore2 = 0;
    setTimeout(() => removeVictoryText(), 3000);
}

function appendVictoryText(playerNr) {
    h2.innerHTML = `Yay! Player ${playerNr} won!`;
    divWinner.appendChild(h2);
    console.log(`Yay! Player ${playerNr} won!`);
}

// function that removes the victory text when starting new game
function removeVictoryText() {
    // h2.innerHTML = " ";  -  other way of removing the text
    h2.remove();
    console.log(`Removed victory text!`);
}
// END FUNCTIONS