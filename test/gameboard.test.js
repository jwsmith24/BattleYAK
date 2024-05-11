const board = require('../src/gameboard');
const ship = require('../src/ship');

const battleship = ship.createBattleship();
const gameboard = board.createGameBoard();

test('Place battleship on board', () => {
  const spaces = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 1,
      y: 0,
    },
    {
      x: 2,
      y: 0,
    },
    {
      x: 3,
      y: 0,
    },
  ];
  gameboard.placeShip(spaces, battleship);

  const strike = {
    x: 0,
    y: 0,
  };

  const miss = {
    x: 5,
    y: 2,
  };
  gameboard.handleAttack(strike);

  gameboard.handleAttack(miss);
});
