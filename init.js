let tictacgrid = document.getElementById("tic-tac-grid");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


const mark = ["O", "X"];
let val = 0;
function handleOnGridClick(e) {
    if (e.target.innerText != "") {
        alert("please select emty box")
        return
    }

    val++;
    val = val % 2;
    e.target.innerText = mark[val];
    console.log(val);

    checkIfGameIsOver();
}

tictacgrid.addEventListener("click", handleOnGridClick);

function checkIfGameIsOver() {
    if (
        box1.innerText != "" &&
        box2.innerText != "" &&
        box3.innerText != "" &&
        box4.innerText != "" &&
        box5.innerText != "" &&
        box6.innerText != "" &&
        box7.innerText != "" &&
        box8.innerText != "" &&
        box9.innerText != ""
    ) {
        setTimeout(function () {
            alert("----Game Over----")
        });
    }
}