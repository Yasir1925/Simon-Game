let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["green", "red", "blue", "yellow"];
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("key pressed");
  }
  started = true;
  levelup();
});
function levelup() {
  userseq = [];
  level++;
  let h2 = document.querySelector("h2");
  h2.innerText = ` level:${level}`;
  // let b = document.querySelector(".red");
  let randindx = Math.floor(Math.random() * 3);
  // console.log(randindx);
  let randColr = `${btns[randindx]}`;
  // console.log(randColr);
  let randBtn = document.querySelector(`.${randColr}`);
  // console.log(randBtn);
  gameseq.push(randColr);
  console.log(gameseq);
  btnFlash(randBtn);
}
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}
function checkAns(idx) {
  // console.log("current level",level);
  // let idx=level-1
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 200);
    }
  } else {
    let h2 = document.querySelector("h2");
    h2.innerHTML =` Game Over , Your score was ${level} <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white"
    },200)
    reset()
  }
}

function btnPress() {
  console.log(this);
  let btn = this;
  btnFlash(btn);
  userColr = btn.getAttribute("id");
  userseq.push(userColr);
  console.log(userseq);
  checkAns(userseq.length - 1);
}

let buttons = document.querySelectorAll(".btn");
// console.log(buttons[0]);
for (btn of buttons) {
  btn.addEventListener("click", btnPress);
}
function reset(){
  started=false
  userseq=[]
  gameseq=[]
  level=0

}