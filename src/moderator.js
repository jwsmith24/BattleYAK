const playerModule = require('../src/player');

const player1 = playerModule.createPlayer(playerModule.playerType.REAL);
const player2 = playerModule.createPlayer(playerModule.playerType.COMPUTER);
// 1-> p1, 2 -> p2
let turn = 1;

function nextTurn() {
  if (turn === 1) {
    turn = 2;
  } else {
    turn = 1;
  }
}
