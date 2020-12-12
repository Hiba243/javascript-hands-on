//DOM Manipulation

var scores, roundScore, activePlayer, gamePlaying, prevDice=0,winScore;

init();

document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
    // random number
    var dice=Math.floor(Math.random()*6)+1;

    // display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    // update the round score only if the score wasnt 1
    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current--'+activePlayer).textContent=roundScore;
        
    }
    else if(prevDice===6 && dice===6){
        scores[activePlayer]=0;
        document.getElementById('score--'+activePlayer).textContent='0';
        nextPlayer();
    }
    else{
        //next player
        nextPlayer();
    }}
    prevDice=dice;
})

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
    //add current score to global score
    scores[activePlayer]+=roundScore;
    //update ui
    document.getElementById('score--'+activePlayer).textContent=scores[activePlayer];
    var score=document.querySelector('.final--score').value;
    if(score){
        winScore=score;
    }
    else{
        winScore=10;
    }

    //check if player won the game
    if(scores[activePlayer]>=winScore){
        document.getElementById('name--'+activePlayer).textContent='WINNER';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        gamePlaying=false;
    }
    else{
        nextPlayer();
    }
    }  
})

document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    gamePlaying=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    document.getElementById('name--0').textContent='Player 1';
    document.getElementById('name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}
function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.dice').style.display='none';
}
