'use strict';

//referenaces
const message = document.querySelector('.message');
const score = document.querySelector('.label-score');
const highscore = document.querySelector('.label-highscore');
const input = document.querySelector('.guess');
const hidden = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const initialColor = document.body.style.backgroundColor;
let max = 0;

var x = Math.trunc(Math.random() * 20) + 1;
var i = 20;

//All reset
const reset = function () {
    x = Math.trunc(Math.random() * 20) + 1;
    message.textContent = "Start guessing...";
    i = 20;
    document.body.style.backgroundColor = initialColor;
    score.textContent = `💯 Score: 20`;
    hidden.textContent = '?';
    checkBtn.disabled = false;
}
//gameLogic

const checkNumber = function () {
    const guessNo = Number(input.value);

    if (!guessNo) {
        message.textContent = "No number!";
    } else {
        if (guessNo > 20 || guessNo < 1) {
            countDown()
            score.textContent = `💯 Score: ${i}`;
            message.textContent = "Invalid number!";

        }
        else if (guessNo === x) {
            message.textContent = "Correct Number!";
            hidden.textContent = x;
            if (max < i) {
                max = i;
                highscore.textContent = `🥇 Highscore: ${i}`;
            }
            document.body.style.backgroundColor = "Green";
            checkBtn.disabled = true;

        } else {
            countDown()
            if (x > guessNo) message.textContent = "Too high...";
            else message.textContent = "Too low...";
        }
    }
    function countDown() {
        i--;
        if (i === 0) {
            alert("Game Over!");
            window.location.reload();
        }
        score.textContent = `💯 Score: ${i}`;
    }

}


//Button listener
checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', reset);