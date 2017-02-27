/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activityPlayer,runningPlay, score0, score1, current0, current1, previousDice0, previousDice1, goal;
score0 = document.getElementById("score-0");
score1 = document.getElementById("score-1");
current0 = document.getElementById("current-0");
current1 = document.getElementById("current-1");

init();

function init() {
    runningPlay = true;
    goal = document.getElementById("goal").value;
    scores = [0,0];
    roundScore = 0;
    activityPlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("name-0").classList.remove("winner");
    document.getElementById("name-1").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");

    document.querySelector('.dice-0').style.display = "none";
    document.querySelector('.dice-1').style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click", function () {

    if (runningPlay) {
        scores[activityPlayer] += roundScore;
        document.getElementById("score-" + activityPlayer).textContent = scores[activityPlayer];

        if (scores[activityPlayer] >= goal) {
            document.getElementById("name-" + activityPlayer).textContent = "Winner!";
            document.querySelector(".player-" + activityPlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activityPlayer + "-panel").classList.remove("active");
            document.querySelector(".dice-0").style.display = "none";
            document.querySelector(".dice-1").style.display = "none";
            runningPlay = false
        } else {
            nextPlayer();
        }
    }
});

document.getElementById("goal").addEventListener("input", init);

document.querySelector('.btn-roll').addEventListener("click", function () {
    if (runningPlay) {
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".dice-0").src = "dice-" + dice0 + ".png";
        document.querySelector(".dice-0").style.display = "block";

        document.querySelector(".dice-1").src = "dice-" + dice1 + ".png";
        document.querySelector(".dice-1").style.display = "block";

        if (dice0 > 1 && dice1 > 1) {
            roundScore += dice0 + dice1;
            document.getElementById("current-"+ activityPlayer).textContent = roundScore;

            if (dice0 === 6 && previousDice0 === 6 || dice1 === 6 && previousDice1 === 6) {
                scores[activityPlayer] = 0;
                document.getElementById("score-" + activityPlayer).textContent = scores[activityPlayer];
                nextPlayer();
            } else {
                previousDice0 = dice0;
                previousDice1 = dice1;
            }

        } else {
            nextPlayer();
        }
    }
});


document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
    activityPlayer = activityPlayer === 0 ? 1 : 0;
    roundScore = 0;
    previousDice0 = 0;
    previousDice1 = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}


