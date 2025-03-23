let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");

let resetbutton = document.querySelector("#resetbutton");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const gencompchoice  = () =>{
  const options = ["Rock","Paper","Scissor"];
  const indexnum = Math.floor(Math.random()*3);
  return options[indexnum];

};
let userscorenum = 0;
let compscorenum = 0;

const showWinner = (userWin, compchoice, userchoice) =>{
  if(userWin){
    userscorenum++;
    userscore.innerText = userscorenum;
    console.log("you win!");
    msg.innerText = `you win! your "${userchoice}" beats "${compchoice}"`;
    msg.style.backgroundColor= "green";
    
  }else{
    compscorenum++;
    compscore.innerText = compscorenum;
    console.log("you lose!!");
    msg.innerText = `you lose! "${compchoice}" beats your "${userchoice}"`;
    msg.style.backgroundColor= "#780000";
  

  }
};


const playgame = (userchoice) =>{
  console.log("user choice =",userchoice);

  const compchoice = gencompchoice();
  console.log("comp choice =",compchoice)

  if (userchoice === compchoice){
    //game draw
    console.log("it's draw" );
    msg.innerText ="it's draw";
    msg.style.backgroundColor = "#003049";
  }else {
    let userWin = true;
    if(userchoice === "Rock"){
      //scissor, paper
      userWin = compchoice === "Paper" ? false : true;
    }else if (userchoice === "Paper"){
      //rock, scissor
      userWin = compchoice === "Scissor" ? false : true;
    }else { 
      //scissor, paper
      userWin = compchoice === "Rock" ? false : true;
    }
    showWinner(userWin,userchoice,compchoice);

  }
};

choices.forEach( (choice) =>{
     choice.addEventListener("click",() =>{
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
        
     });

}

);

let resetbtnwork = () =>{
  compscorenum = 0;
  userscore.innerText = 0;
  compscore.innerText = 0;
  }

resetbutton.addEventListener("click",resetbtnwork);
