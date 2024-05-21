const boardWidth = 10;
const boardHeight = 10;
const searchStatus = {
  HIT: 'HIT',
  MISS: 'MISS',
  NONE: 'NONE',
};

function createGameBoard() {
  const gameboard = {
    board: [],
    yaks: [],
    attackLog: [],
    resetBoard: function () {
      for (let i = 0; i < boardHeight; i++) {
        this.board[i] = [];
        for (let j = 0; j < boardWidth; j++) {
          this.board[i][j] = {
            yak: 'empty',
            status: searchStatus.NONE,
            hasTarget: function () {
              return this.yak !== 'empty';
            },
          };
        }
      }
    },

    // gets a list of spaces that the yak is occupying. Sets all of their yak references to target ship.
    placeYak: function (spaces, yak) {
      this.yaks.push(yak);
      for (let space of spaces) {
        this.board[space.y][space.x].yak = yak;
      }
    },
    handleAttack: function (space) {
      // if the space has a ship reference, it's a hit!
      const target = this.board[space.y][space.x];

      if (target.yak !== 'empty') {
        this.logAttack(space, searchStatus.HIT);
        target.yak.hit();
        target.status = searchStatus.HIT;
        this.updateActiveYaks();
        return true;
      } else {
        this.logAttack(space, searchStatus.MISS);
        target.status = searchStatus.MISS;
        return false;
      }
    },
    logAttack: function (space, status) {
      this.attackLog.push({ space, status });
    },
    yaksFound: function () {
      for (let yak of this.yaks) {
        if (!yak.isFound()) {
          return false;
        }
      }
      return true;
    },
    buildDisplay: function () {
      // div for each row

      const grid = document.createElement('div');
      grid.classList.add('grid');

      for (let i = 0; i < boardHeight; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < boardWidth; j++) {
          let space = document.createElement('div');
          space.classList.add('space');

          space.id = `${i} ${j}`;

          if (this.board[i][j].status === searchStatus.HIT) {
            space.textContent = 'X';
            space.style.backgroundColor = 'red';
          }

          if (this.board[i][j].status === searchStatus.MISS) {
            space.textContent = 'O';
            space.style.backgroundColor = 'white';
          }

          row.appendChild(space);
        }
        grid.appendChild(row);
      }

      return grid;
    },
    updateActiveYaks: function () {
      this.yaks = this.yaks.filter((yak) => !yak.isFound());
    },
  };
  gameboard.resetBoard();
  return gameboard;
}

module.exports = {
  createGameBoard,
  attackStatus: searchStatus,
  boardWidth,
  boardHeight,
};
