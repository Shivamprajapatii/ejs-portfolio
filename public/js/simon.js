let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started.")
        started = true;
        levelUp();
    }
});


// If user will be click then green color will be generated if game will be flash white color

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

    //  Randome btn chosse and flash it;
    gameFlash(randBtn);

}


function checkAns(idx) {
    // console.log("Current level:",level);

    // let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length)
            setTimeout(levelUp, 1000);
    } else {
        h2.innerHTML = `Game Over! your Score was <b> ${level} <b> <br> Press Any Key To Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    console.log(this); // store it in a vriable
    let btn = this;
    userFlash(btn);   // calling btn flash function

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}