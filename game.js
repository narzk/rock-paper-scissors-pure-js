//implement rock paper scissors
//rule rock -> scissors
//      paper -> rock
//      scissors->paper

//We have 2 roles
//each choose according to click (R, P, S)

//Start Game button
//Show the winner
//restart Game button

const GAME_STATES = { rock: "rock", paper: "paper", scissors: "scissors" }

const gamer1 = { name: "You", state: "rock" }
const gamer2 = { name: "Computer", state: "paper" }

let buttons = document.getElementsByTagName("button")
let WinnerText = document.getElementById("text")
let computerChoice = document.getElementById("computer")

const setGamer = (event) => {
  gamer1.state = event.target.value
  let randomNumber = Math.floor(Math.random() * 3)
  gamer2.state =
    randomNumber == 1
      ? GAME_STATES.rock
      : randomNumber == 2
      ? GAME_STATES.paper
      : GAME_STATES.scissors

  computerChoice.innerText = gamer2.state
  let winner = gameExecution(gamer1.state, gamer2.state)
  if (!winner) {
    WinnerText.innerText = "equal"
  } else {
    WinnerText.innerText = winner.name
  }
}

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", setGamer)
})

const gameExecution = (state1, state2) => {
  if (state1 === GAME_STATES.rock && state2 === GAME_STATES.paper) {
    return gamer2
  }
  if (state1 === GAME_STATES.paper && state2 === GAME_STATES.rock) {
    return gamer1
  }
  if (state1 === GAME_STATES.scissors && state2 === GAME_STATES.paper) {
    return gamer1
  }
  if (state1 === GAME_STATES.paper && state2 === GAME_STATES.scissors) {
    return gamer2
  }
  if (state1 === GAME_STATES.rock && state2 === GAME_STATES.scissors) {
    return gamer1
  }
  if (state1 === GAME_STATES.scissors && state2 === GAME_STATES.rock) {
    return gamer2
  }

  return false
}
