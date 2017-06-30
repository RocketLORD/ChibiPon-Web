var eyeElem;
var cardElem;
var mustBlink = 2.4;

function newCard() {
    var RNG = Math.floor(Math.random() * 100);
    
    if(RNG >= 90) {
        cardElem.src = "card_balance.png";
    } else if(RNG < 90 && RNG >= 50) {
        cardElem.src = "card_pikachu.png";
    } else if(RNG < 50 && RNG >= 0) {
        cardElem.src = "card_blank.png";
    }
}

function ponUnblink() {
    eyeElem.src = "eyes_cheerful.png";
}

function ponBlink() {
    
    mustBlink -= Math.random();
    
    if(mustBlink < 0) {
        setTimeout(ponUnblink, 160);
        eyeElem.src = "eyes_closed.png";
        mustBlink = 2.4;
    }
    
    //document.getElementById("blinker").innerHTML = mustBlink;
}

function init() {

    eyeElem = document.getElementById("ponEyes");
    cardElem = document.getElementById("ponCard");
    
    cardElem.addEventListener("click", newCard);
    
    setInterval(ponBlink, 1000);
    
}

document.addEventListener('DOMContentLoaded', init, false);