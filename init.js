let tictacbox = document.getElementById("tic-tac-box");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


const mark = ["O","X"];
let val = 0;
function handleOnTicTac(e) {
    val++;
    val = val%2;
     e.target.innerText = mark[val];
     console.log(val);
}
tictacbox.addEventListener("click", handleOnTicTac);