/* eslint-disable no-unused-vars */
import './style.css';
const playerModule = require('../src/player');

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
