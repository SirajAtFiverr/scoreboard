
let homeScoreEl = document.getElementsByClassName("home-score")[0];
let guestScoreEl = document.getElementsByClassName("guest-score")[0];

let homeScore = 0;
let guestScore = 0;

function highlightLeader(){
    if(homeScore > guestScore){
        homeScoreEl.style = "color: green;"
        guestScoreEl.style = "color: red;"
    }else if(homeScore < guestScore){
        homeScoreEl.style = "color: red;"
        guestScoreEl.style = "color: green;"
    }else{
        homeScoreEl.style = "color: red;"
        guestScoreEl.style = "color: red;"
    }
}

function addOneToHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addTwoToHome(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addThreeToHome(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function addOneToGuest(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addTwoToGuest(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function addThreeToGuest(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function startNewGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}