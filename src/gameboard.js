const boardWidth = 10;
const boardHeight = 10;

function createGameBoard() {
  const board = {
    board: [],
    ships: [],
    attackLog: [],
    resetBoard: function () {
      for (let i = 0; i < boardHeight; i++) {
        this.board[i] = [];
        for (let j = 0; j < boardWidth; j++) {
          this.board[i][j] = {
            ship: 'empty',
            hasTarget: function () {
              return this.ship !== 'empty';
            },
          };
        }
      }
    },
    // gets a list of spaces that the ship is occupying. Sets all of their ship references to target ship.
    placeShip: function (spaces, ship) {
      for (let space of spaces) {
        this.board[space.x][space.y] = ship;
      }
    },
    handleAttack: function (space) {
      // if the space has a ship reference, it's a hit!

      if (this.board[space.y][space.x].ship !== 'empty') {
        console.log('hit!');
      } else {
        console.log('miss!');
      }
    },
  };
  board.resetBoard();
  return board;
}

module.exports = {
  createGameBoard,
};
