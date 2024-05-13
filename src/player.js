const gameBoardModule = require('../src/gameboard');

const playerType = {
  REAL: 'REAL',
  COMPUTER: 'COMPUTER',
};

function createPlayer(playerType) {
  const player = {
    type: playerType,
    board: gameBoardModule.createGameBoard(),
    attackLog: [],
  };

  return player;
}

module.exports = {
  playerType,
  createPlayer,
};
