console.log("js connected");
let count1= 0;
let count2 = 0;
let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#userScore");
let compscore = document.querySelector("#compScore");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userchoice);
    });
});
const playGame = (userchoice) =>{
    console.log("the user clicked is :"+userchoice);
    let com = compChoice();

    if(userchoice === com){
        draw();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //paper or scissors
            userWin = com === "paper"?false:true
            gameWinner(userWin,userchoice,com);
        }
        else if(userchoice === "paper"){
            //rock or scissors
            userWin = com === "scissors"?false:true;
            gameWinner(userWin,userchoice,com);
        }
        else{
            //rock or paper
            userWin = com === "rock"?false:true;
            gameWinner(userWin,userchoice,com);
        }
    }
    

    


}
const compChoice = () =>{
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    const comch = options[index];
    console.log(comch);
    return comch;
}
const draw = () =>{
    let d = "Its a Draw";
    msg.innerText = "Its a draw,play again"
    msg.style.backgroundColor = "darkgrey"
    console.log(d);
}
let gameWinner = (userWin,userchoice,com) =>{
    if(userWin){
        count1++;
        console.log("user win");
        msg.innerText = `You win, Your ${userchoice} beats ${com}`;
        msg.style.backgroundColor = "green";
        console.log("The user score = "+count1)
        userscore.innerText = count1;
        
    }
    else{
        count2++;
        console.log("computer win");
        msg.innerText = `You lost , ${com} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        console.log("The computer score = "+count2);
        compscore.innerText = count2;
        
    }
}

  let new1 =   reset.addEventListener("click",() =>{
    msg.innerText = "Play Now";
    msg.style.backgroundColor = "dimgrey";
    msg.style.color = "white";
    userscore.innerText = "0";
    compscore.innerText = "0";
    count1 = 0;
    count2 = 0;




});

