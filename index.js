const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText"); 
const resetBtn = document.querySelector("#resetBtn");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const boardBackGround = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";

const unitSize = 25;
let running = false;

let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);


gameStart();

function startGame(){};
function nextTick(){};
function clearBoard(){};
function createFood(){};
function drawFood(){};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};