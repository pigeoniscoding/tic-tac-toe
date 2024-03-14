const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartbtn = document.querySelector("#restartbtn");
const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

];
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellclicked));
  restartbtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn!`;
  running = true;
}
function cellclicked(){
  const cellIndex = this.getAttribute("cellIndex");
  if(options[cellIndex]!=""|| !running){
    return;
  }
  console.log(this);
  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell , index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer(){}
function checkWinner(){}
function restartGame(){}