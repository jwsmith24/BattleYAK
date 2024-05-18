/* eslint-disable no-unused-vars */
import {
  createBattleship,
  createCarrier,
  createCruiser,
  createDestroyer,
} from './ship';
import './style.css';
const playerModule = require('../src/player');

const p1BoardDisplay = document.getElementById('player1Board');
const p2BoardDisplay = document.getElementById('player2Board');

const gameStatusText = document.getElementById('gameStatus');
const p1YakCount = document.getElementById('p1YakCount');
const p2YakCount = document.getElementById('p2YakCount');

let player1 = playerModule.createPlayer(playerModule.playerType.REAL);
let player2 = playerModule.createPlayer(playerModule.playerType.COMPUTER);

const tinyYak1 = document.getElementById('tinyYak1');
const smallYak1 = document.getElementById('smallYak1');
const mediumYak1 = document.getElementById('mediumYak1');
const largeYak1 = document.getElementById('largeYak1');

const tinyYak2 = document.getElementById('tinyYak2');
const smallYak2 = document.getElementById('smallYak2');
const mediumYak2 = document.getElementById('mediumYak2');
const largeYak2 = document.getElementById('largeYak2');

const turns = {
  player1: 'p1',
  player2: 'p2',
};

const gameState = {
  init: 'init',
  playing: 'playing',
  gameOver: 'gameOver',
};

let activeTurn = turns.player1;
let state = gameState.init;

function startGame() {
  populateBoards();
  initBoards();
  updateYaks();
}

startGame();

function nextTurn() {
  checkGameOver();
  updateYaks();
  loadBoards();
  if (activeTurn === turns.player1) {
    activeTurn = turns.player2;
  } else {
    activeTurn = turns.player1;
  }
}

// rebuild boards after changes
function loadBoards() {
  clearBoards();
  p1BoardDisplay.appendChild(player1.board.buildDisplay());
  p2BoardDisplay.appendChild(player2.board.buildDisplay());
}

// build boards and add action listeners
function initBoards() {
  loadBoards();
  p1BoardDisplay.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('space')) {
      handlePlayer2Turn(e.target.id);
    }
  });

  p2BoardDisplay.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('space')) {
      handlePlayer1Turn(e.target.id);
    }
  });
}

function clearBoards() {
  p1BoardDisplay.innerHTML = '';
  p2BoardDisplay.innerHTML = '';
}

function handlePlayer1Turn(target) {
  if (activeTurn !== turns.player1) {
    console.log('Not your turn!');
    return;
  } else {
    const attack = resolveSpace(target);
    const result = player2.board.handleAttack(attack);
    player1.attackLog.push({ attack, result });
    nextTurn();
  }
}

function handlePlayer2Turn(target) {
  if (activeTurn !== turns.player2) {
    console.log('Not your turn!');
    return;
  } else {
    const attack = resolveSpace(target);
    const result = player1.board.handleAttack(attack);
    player2.attackLog.push({ attack, result });
    nextTurn();
  }
}

function resetYaks() {
  tinyYak1.classList.remove('hidden');
  smallYak1.classList.remove('hidden');
  mediumYak1.classList.remove('hidden');
  largeYak1.classList.remove('hidden');

  tinyYak2.classList.remove('hidden');
  smallYak2.classList.remove('hidden');
  mediumYak2.classList.remove('hidden');
  largeYak2.classList.remove('hidden');
}

function hideP1Yaks(yaks) {
  for (let yak of yaks) {
    switch (yak.length) {
      case 2:
        tinyYak1.classList.add('hidden');
        break;
      case 3:
        smallYak1.classList.add('hidden');
        break;
      case 4:
        mediumYak1.classList.add('hidden');
        break;
      case 5:
        largeYak1.classList.add('hidden');
    }
  }
}

function hideP2Yaks(yaks) {
  console.log(yaks);
  for (let yak of yaks) {
    switch (yak.length) {
      case 2:
        tinyYak2.classList.add('hidden');
        break;
      case 3:
        smallYak2.classList.add('hidden');
        break;
      case 4:
        mediumYak2.classList.add('hidden');
        break;
      case 5:
        largeYak2.classList.add('hidden');
    }
  }
}

function updateYaks() {
  const p1Yaks = player1.board.ships;
  const p2Yaks = player2.board.ships;

  resetYaks();
  hideP1Yaks(p1Yaks);
  hideP2Yaks(p2Yaks);

  p1YakCount.textContent = `Yaks Remaining: ${p1Yaks.length}`;

  p2YakCount.textContent = `Yaks Remaining: ${p2Yaks.length}`;
}

function resolveSpace(targetString) {
  const target = targetString.split(' ');
  const space = {
    y: target[0],
    x: target[1],
  };
  return space;
}

// hard code yaks for testing
function populateBoards() {
  const mediumYak = [
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

  const largeYak = [
    {
      x: 9,
      y: 0,
    },
    {
      x: 9,
      y: 1,
    },
    {
      x: 9,
      y: 2,
    },
    {
      x: 9,
      y: 3,
    },
    {
      x: 9,
      y: 4,
    },
  ];

  const tinyYak = [
    {
      x: 1,
      y: 6,
    },
    {
      x: 1,
      y: 7,
    },
  ];

  const smallYak = [
    {
      x: 9,
      y: 9,
    },
    {
      x: 8,
      y: 9,
    },
    {
      x: 7,
      y: 9,
    },
  ];

  player1.board.placeShip(tinyYak, createDestroyer());
  player1.board.placeShip(largeYak, createCarrier());
  player1.board.placeShip(mediumYak, createBattleship());
  player1.board.placeShip(smallYak, createCruiser());

  player2.board.placeShip(tinyYak, createDestroyer());
  player2.board.placeShip(largeYak, createCarrier());
  player2.board.placeShip(mediumYak, createBattleship());
  player2.board.placeShip(smallYak, createCruiser());
}

function checkGameOver() {
  if (player1.board.fleetSunk() || player2.board.fleetSunk()) {
    alert('game over!');
    state = gameState.gameOver;
  }
}
