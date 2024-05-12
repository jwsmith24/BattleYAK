const board = require('../src/gameboard');
const ship = require('../src/ship');

const battleship = ship.createBattleship();
const gameboard = board.createGameBoard();

function placeBattleship() {
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
}

test('Place a ship on the board', () => {
  placeBattleship();
  expect(gameboard.board[0][0].ship.length).toBe(4);
  expect(gameboard.board[0][1].ship.length).toBe(4);
  expect(gameboard.board[0][2].ship.length).toBe(4);
  expect(gameboard.board[0][3].ship.length).toBe(4);
});

test('Strike a ship in multiple locations and the same reference updates hit count', () => {
  const strike1 = {
    x: 0,
    y: 0,
  };

  const strike2 = {
    x: 3,
    y: 0,
  };
  gameboard.handleAttack(strike1);
  gameboard.handleAttack(strike2);

  expect(battleship.hits).toBe(2);
});

test('Hits logged in attack log', () => {
  expect(gameboard.attackLog.length).toBe(2);
});

test('Miss a ship', () => {
  const miss = {
    x: 5,
    y: 2,
  };

  gameboard.handleAttack(miss);
  expect(battleship.hits).toBe(2);
  expect(gameboard.attackLog[1].status).toBe(board.attackStatus.HIT);
});

test('Miss logged correctly in attack log', () => {
  expect(gameboard.attackLog.length).toBe(3);
  expect(gameboard.attackLog[2].status).toBe(board.attackStatus.MISS);
});
