let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const darw=()=>{
    msg.innerText="Game was Draw,play again";
    msg.style.backgroundColor="black";
}

let showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }

}
const playGame=(userChoice)=>{
    //comp choice at random
    const compchoice=genCompChoice();

    if(userChoice===compchoice){
        darw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compchoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compchoice==="scissors"?false:true;
        }else if(userChoice==="scissors"){
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
     
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});