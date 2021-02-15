'use strict';

//referenaces
const message = document.querySelector('.message');
const score = document.querySelector('.label-score');
const highscore = document.querySelector('.label-highscore');
const input = document.querySelector('.guess');
const hidden = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

//gameLogic
let x = Math.trunc(Math.random()*20)+1;

const checkNumber = function(){
    const guessNo = Number(input.value);

    
    if(!guessNo){
        message.textContent = "No number!";
    }else{
        if(guessNo>20 || guessNo<1) 
        {
            message.textContent = "Invalid number!";

        }
        else if(guessNo === x){
            message.textContent = "Correct Number!";
            hidden.textContent = x;

        }else{
            if(x > guessNo) message.textContent = "Too high...";
            else message.textContent = "Too low...";
        }
    }
}

const reset = function(){
    let x = Math.trunc(Math.random*20)+1;
    message.textContent = "Start guessing...";

}

checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', reset);