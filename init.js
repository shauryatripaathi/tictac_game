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
    if(e.target.innerText == ""){
        val++;
        val = val%2;
     e.target.innerText = mark[val];
     console.log(val);
    }
    
    else if(box1.innerText != "" && box2.innerText != "" && box3.innerText != "" && box4.innerText != "" && box5.innerText != "" && box6.innerText != "" && box7.innerText != "" && box8.innerText != "" && box9.innerText != ""){
        alert("game is over");
    }

    else if(e.target.innerText != ""){
        alert("please select emty box")
    }
}
tictacbox.addEventListener("click", handleOnTicTac);