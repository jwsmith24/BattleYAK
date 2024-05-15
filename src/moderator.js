/* eslint-disable no-unused-vars */
import './style.css';
const playerModule = require('../src/player');

const p1BoardDisplay = document.getElementById('player1Board');
const p2BoardDisplay = document.getElementById('player2Board');

let player1 = playerModule.createPlayer(playerModule.playerType.REAL);
let player2 = playerModule.createPlayer(playerModule.playerType.COMPUTER);
// 1-> p1, 2 -> p2
let turn = 1;

function nextTurn() {
  if (turn === 1) {
    turn = 2;
  } else {
    turn = 1;
  }
}

function startGame() {
  player1 = playerModule.createPlayer(playerModule.playerType.REAL);
  player2 = playerModule.createPlayer(playerModule.playerType.COMPUTER);

  console.log(player1);
  console.log(player2);
}

function loadBoards() {
  p1BoardDisplay.appendChild(player1.board.buildDisplay());
  p2BoardDisplay.appendChild(player2.board.buildDisplay());
}

loadBoards();
