/* eslint-disable no-unused-vars */
import {
  createLargeYak,
  createMediumYak,
  createSmallYak,
  createTinyYak,
} from './yak';
import './style.css';
const playerModule = require('../src/player');

const p1BoardDisplay = document.getElementById('player1Board');

const gameStatusText = document.getElementById('gameStatus');
const p1YakCount = document.getElementById('p1YakCount');
const p2YakCount = document.getElementById('p2YakCount');

let player1 = playerModule.createPlayer(playerModule.playerType.REAL);

const tinyYak1 = document.getElementById('tinyYak1');
const smallYak1 = document.getElementById('smallYak1');
const mediumYak1 = document.getElementById('mediumYak1');
const largeYak1 = document.getElementById('largeYak1');

const gameState = {
  init: 'init',
  playing: 'playing',
  gameOver: 'gameOver',
};

let state = gameState.init;

function startGame() {
  populateBoards();
  updateYaks();
  initBoards();

  state = gameState.playing;
}

startGame();

function nextTurn() {
  updateYaks();
  loadBoards();
  checkGameOver();
}

// rebuild boards after changes
function loadBoards() {
  clearBoards();
  p1BoardDisplay.appendChild(player1.board.buildDisplay());
}

// build boards and add action listeners
function initBoards() {
  loadBoards();
  p1BoardDisplay.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('space')) {
      handleTurn(e.target.id);
    }
  });
}

function clearBoards() {
  p1BoardDisplay.innerHTML = '';
}

function handleTurn(target) {
  if (state === gameState.playing) {
    const attack = resolveSpace(target);
    const result = player1.board.handleAttack(attack);
    player1.attackLog.push({ attack, result });
    nextTurn();
  } else {
    console.log('Game is not currently active');
  }
}

function resetYaks() {
  tinyYak1.classList.remove('hidden');
  smallYak1.classList.remove('hidden');
  mediumYak1.classList.remove('hidden');
  largeYak1.classList.remove('hidden');
}

function hideYaks(yaks) {
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

function updateYaks() {
  const p1Yaks = player1.board.yaks;
  console.log(p1Yaks);

  resetYaks();
  hideYaks(p1Yaks);
  p1YakCount.textContent = `Yaks Remaining: ${p1Yaks.length}`;
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

  player1.board.placeYak(tinyYak, createTinyYak());
  player1.board.placeYak(largeYak, createLargeYak());
  player1.board.placeYak(mediumYak, createMediumYak());
  player1.board.placeYak(smallYak, createSmallYak());

  console.log(player1.board);
}

function checkGameOver() {
  if (player1.board.yaksFound()) {
    console.log('game over!');
    state = gameState.gameOver;
  }
}
