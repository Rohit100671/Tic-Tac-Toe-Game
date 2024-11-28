let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn") 
let newgamebtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msg-container")
let msgpara = document.querySelector("#msg")

let turnO=true
let winpattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{
    turnO=true
    enablebuttons()
    msgcontainer.classList.add("hide")
}

const diablebuttons = () =>{
    for(let b of boxes)
    {
        b.disabled=true
    }
}

const enablebuttons = () =>{
    for(let b of boxes)
    {
        b.disabled=false
        b.innerText=""
    }
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O"
            turnO=false
            
        }
        else
        {
            box.innerText="X"
            turnO=true
        }
        box.disabled= true
        checkwinner();
    })
})

const showwinner = (winner) =>{
    msgpara.innerText=`Congratulations, Winner is player '${winner}'`
    msgcontainer.classList.remove("hide")
    diablebuttons()
}

const checkwinner = ()=>{
    for(let pattern of winpattern)
    {
        console.log("box was click")
        let pos1val=boxes[pattern[0]].innerText;   
        let pos2val=boxes[pattern[1]].innerText;   
        let pos3val=boxes[pattern[2]].innerText;  
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val)
            }
        }

       
    }
}

resetbtn.addEventListener('click',resetgame)
newgamebtn.addEventListener('click',resetgame)