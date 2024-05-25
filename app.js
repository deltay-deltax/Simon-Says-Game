let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "puple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function btnFlash(randBtn) {
    if (randBtn) { // Check if randBtn exists before accessing classList
        randBtn.classList.add("flash");
        setTimeout(function () {
            randBtn.classList.remove("flash");
        }, 1000);
    } else {
        console.error("Element with class", randColor, "not found!");
    }
}

function userFlash(randBtn) {
    if (randBtn) { // Check if randBtn exists before accessing classList
        randBtn.classList.add("userflash");
        setTimeout(function () {
            randBtn.classList.remove("userflash");
        }, 1000);
    } else {
        console.error("Element with class", randColor, "not found!");
    }
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameseq.push(randColor);
    console.log(gameseq);

    // Consider using querySelectorAll if you have multiple buttons per color
    let randBtn = document.querySelector(`.${randColor}`);

    btnFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if (userseq.length===gameseq.length){
            setTimeout(levelup,1000); 
        }
        console.log("same value")
    }else{
        console.log(h2.innerText = "game over!!press any key to start ");
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }

}



function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
} 

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0; 
}