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

    checkIfPlayerWon();
    
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
        playerInfoBox.innerText = "Game Over"
        setTimeout(function () {
            alert("----Game Over----")
            location.reload();
        });
    }
}

function checkIfPlayerWon(){
if(
   tile11.innerText == "X" && tile12.innerText == "X" && tile13.innerText == "X" ||
   tile21.innerText == "X" && tile22.innerText == "X" && tile23.innerText == "X" ||
   tile31.innerText == "X" && tile32.innerText == "X" && tile33.innerText == "X" ||
   tile11.innerText == "X" && tile21.innerText == "X" && tile31.innerText == "X" ||
   tile12.innerText == "X" && tile22.innerText == "X" && tile32.innerText == "X" ||
   tile13.innerText == "X" && tile23.innerText == "X" && tile33.innerText == "X" ||
   tile31.innerText == "X" && tile22.innerText == "X" && tile13.innerText == "X" ||
   tile11.innerText == "X" && tile22.innerText == "X" && tile33.innerText == "X"
    ){
    playerInfoBox.innerText = "Player 1 Won";
    setTimeout(function(){
        alert("Player 1 Won");
        location.reload();
    });
    }   

else if(
   tile11.innerText == "O" && tile12.innerText == "O" && tile13.innerText == "O" ||
   tile21.innerText == "O" && tile22.innerText == "O" && tile23.innerText == "O" ||
   tile31.innerText == "O" && tile32.innerText == "O" && tile33.innerText == "O" ||
   tile11.innerText == "O" && tile21.innerText == "O" && tile31.innerText == "O" ||
   tile12.innerText == "O" && tile22.innerText == "O" && tile32.innerText == "O" ||
   tile13.innerText == "O" && tile23.innerText == "O" && tile33.innerText == "O" ||
   tile31.innerText == "O" && tile22.innerText == "O" && tile13.innerText == "O" ||
   tile11.innerText == "O" && tile22.innerText == "O" && tile33.innerText == "O"
    ){
    playerInfoBox.innerText = "Player 2 Won";
    setTimeout(function(){
        alert("Player 2 Won");
        location.reload();
    });
}    
}


let canvas = document.createElement("canvas");
canvas.id = "canvas";
tictacgrid.appendChild(canvas);

let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(10,100);
ctx.lineTo(100,40);
ctx.stroke();



// function checkIfPlayerWon(sign) {
//     if (
//         tile11.innerText == sign && tile12.innerText == sign && tile13.innerText == sign ||
//         tile21.innerText == sign && tile22.innerText == sign && tile23.innerText == sign ||
//         tile31.innerText == sign && tile32.innerText == sign && tile33.innerText == sign ||
//         tile11.innerText == sign && tile21.innerText == sign && tile31.innerText == sign ||
//         tile12.innerText == sign && tile22.innerText == sign && tile32.innerText == sign ||
//         tile13.innerText == sign && tile23.innerText == sign && tile33.innerText == sign ||
//         tile31.innerText == sign && tile22.innerText == sign && tile13.innerText == sign ||
//         tile11.innerText == sign && tile22.innerText == sign && tile33.innerText == sign
//     ) {
//         checkIfPlayerWon("X")
//         playerInfoBox.innerText = "Player 1 Won";
//         setTimeout(function () {
//             alert("Player 1 Won");
//             location.reload();
//         })
    
        
//         checkIfPlayerWon("O")
//         playerInfoBox.innerText = "Player 2 Won";
//         setTimeout(function () {
//             alert("Player 2 Won");
//             location.reload();
//         });
//     }
    
//     }

