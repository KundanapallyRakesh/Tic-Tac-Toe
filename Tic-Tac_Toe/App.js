let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let h2=document.querySelector("h2");
let newGame=document.querySelector(".new");
let turnx=true;
let msg=document.querySelector(".msg");
const winners=
[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],];

const resetGame=()=>{
    turnx=true;
    h2.innerText="";
    msg.classList.add("hide");
    reset.classList.remove("hide");
    enableBox();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx){
            box.innerText="x";
            box.style.color = "#A3320B";
            turnx=false
        }
        else{
            box.innerText="o";
            box.style.color = "#6B0504";
            turnx=true
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    let winnerFound=false;
    for(let pattern of winners){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                disableBox();
                h2.innerText=`Winner ${pos1}` ;
                msg.classList.remove("hide");
                reset.classList.add("hide");
            }
        }
    }
    if (!winnerFound && [...boxes].every(box => box.innerText !== "")) {
        h2.innerText = "It's a Draw!";
        msg.classList.remove("hide"); // Show New Game button
        reset.classList.add("hide"); 
    }

}
newGame.addEventListener('click',resetGame);
reset.addEventListener("click",resetGame);