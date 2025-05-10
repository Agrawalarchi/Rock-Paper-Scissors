let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".options");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const userimg = document.querySelector("#userimg");
const compimg = document.querySelector("#compimg");
let images = document.querySelectorAll(".images")
let body = document.querySelector('body');
const choices = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.png"
};

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    // Step 1: Apply animation
    userimg.classList.add("images2");
    compimg.classList.add("images2");

    // Step 2: Wait 2 seconds, then update images and remove animation
    setTimeout(() => {
        userimg.src = choices[userChoice];
        compimg.src = choices[compChoice];

        // Remove animation class so it can be reused on next click
        userimg.classList.remove("images2");
        compimg.classList.remove("images2");

        // Step 3: Determine result
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice !== "paper";
            } else if (userChoice === "paper") {
                userWin = compChoice !== "scissors";
            } else {
                userWin = compChoice !== "rock";
            }
            showWinner(userWin, userChoice, compChoice);
        }  
        document.body.style.color = "black";
    },1500); // 1.5 second delay
};
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black";
     msg.style.color = "white";
body.classList.remove("hide1","hide2");
body.classList.add("hide3");
};

const showWinner = (userWin, userChoice, compChoice) => {
    body.classList.remove("hide1","hide2","hide3")
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "darkGreen";
        body.classList.add("hide1");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
         body.classList.add("hide2");
    }
};
