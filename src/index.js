const gameBoardModule = require('./gameboard');

// generates the game board UI for a given board object
function buildGameBoardDisplay(gameBoard) {
  // div for each row

  const grid = document.createElement('div');
  grid.classList.add('grid');

  for (let i = 0; i < gameBoardModule.boardHeight; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = j; j < gameBoardModule.boardWidth; j++) {
      let space = document.createElement('div');
      space.classList.add('space');
      row.appendChild(space);
    }
    grid.appendChild(row);
  }

  return grid;
}
