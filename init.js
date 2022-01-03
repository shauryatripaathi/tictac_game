let tictacbox = document.getElementById("tictacbox");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

tictacbox.addEventListener("click",handleOnTicTac);


function handleOnTicTac(e){
    e.target.innerText = "x"
    console.log(e.target)
}

let y = 0;
    {
    y++
    }
    
console.log(y);