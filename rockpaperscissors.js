//Game as a whole
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

//function to play game
    const playGame = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const playerOptions = [rockButton, paperButton, scissorsButton];
        const computerOptions = ["rock", "paper", "scissors"]


        //Start the game
        playerOptions.forEach(option => {option.addEventListener('click', function(){
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Remaining: ${10-moves}`;

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            //Who wins
            winner(this.innerText, computerChoice)

            //Gave Over after 10 moves
            if(moves == 10){
                gameOver(playerOptions, movesLeft);
            }
        })
    })
}
    function winner(player, computer) {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = `Tied Game! You both picked ${player}.`;
        } else if (player === "paper" && computer === "scissors") {
            result.textContent = `Computer wins! ${computer} beats ${player}!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else if (player === "scissors" && computer === "rock") {
            result.textContent = `Computer wins! ${computer} beats ${player}!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else if (player === "rock" && computer === "paper") {
            result.textContent = `Computer wins! ${computer} beats ${player}!`;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = `Player wins! ${player} beats ${computer}!`;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }

    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        
        chooseMove.innerText = "Game Over!!"
        movesLeft.style.display = "none";

        if(playerScore > computerScore){
            result.innerText = 'You Won';
        }
        else if(playerScore < computerScore){
            result.innerText = 'You Lost';
        } else{
            result.innerText = "Tie"
        }
        reloadBtn.InnerText = "Restart";
        reloadBtn.addEventListener('click', () => {window.location.reload();
        })
    }
    playGame();
    }

game();