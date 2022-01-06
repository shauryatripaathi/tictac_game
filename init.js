let tictacgrid = document.getElementById("tic-tac-grid");
let tile11 = document.getElementById("tile11");
let tile12 = document.getElementById("tile12");
let tile13 = document.getElementById("tile13");
let tile21 = document.getElementById("tile21");
let tile22 = document.getElementById("tile22");
let tile23 = document.getElementById("tile23");
let tile31 = document.getElementById("tile31");
let tile32 = document.getElementById("tile32");
let tile33 = document.getElementById("tile33");
let playerInfoBox = document.getElementById("playerInfo");
playerInfoBox.innerText = "LET'S START THE GAME -- Player 1's turn";

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
    playerInfoBox.innerText = `Player ${val+1}'s turn`;

    checkIfGameIsOver();
}

tictacgrid.addEventListener("click", handleOnGridClick);

function checkIfGameIsOver() {
    if (
        tile11.innerText != "" &&
        tile12.innerText != "" &&
        tile13.innerText != "" &&
        tile21.innerText != "" &&
        tile22.innerText != "" &&
        tile23.innerText != "" &&
        tile31.innerText != "" &&
        tile32.innerText != "" &&
        tile33.innerText != ""
    ) {
        setTimeout(function () {
            alert("----Game Over----")
            location.reload();
        });
    }
}