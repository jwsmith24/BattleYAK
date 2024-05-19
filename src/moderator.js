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

const gameStatus = document.getElementById('state');
const p1YakCount = document.getElementById('p1YakCount');

const player = playerModule.createPlayer(playerModule.playerType.REAL);

const tinyYak1 = document.getElementById('tinyYak1');
const smallYak1 = document.getElementById('smallYak1');
const mediumYak1 = document.getElementById('mediumYak1');
const largeYak1 = document.getElementById('largeYak1');

const gameState = {
  init: 'init',
  playing: 'playing',
  gameOver: 'gameOver',
};

let state;

initSession();
function initSession() {
  state = gameState.init;
  startGame();
}

function startGame() {
  populateBoards();
  updateYaks();
  initBoards();

  state = gameState.playing;
}

function nextTurn() {
  updateYaks();
  loadBoards();
  checkGameOver();
}

// rebuild boards after changes
function loadBoards() {
  clearBoards();
  p1BoardDisplay.appendChild(player.board.buildDisplay());
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
    const result = player.board.handleAttack(attack);
    player.attackLog.push({ attack, result });
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
  const p1Yaks = player.board.yaks;
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

// randomly pick a starting point, then select legal coordinates based on yak size
function generateRandomOrigin() {
  const origin = {
    x: getRandomInt(),
    y: getRandomInt(),
  };

  console.log('origin generated: ');
  console.log(origin);
  return origin;
}

// generate random int between 0 and 9
function getRandomInt() {
  let random = Math.random();
  return Math.floor(random * 9);
}

function placeYak(yak) {
  let selecting = true;
  let origin;
  while (selecting) {
    origin = generateRandomOrigin();
    selecting = checkPlacement(yak, origin);
  }

  player.board.placeYak(origin, yak);
}

function checkPlacement(yak, origin) {
  // if origin is occupied
  if (player.board.board[origin.y][origin.x].yak !== 'empty') {
    return true;
  }

  return !(checkY(origin, yak.length) && checkX(origin, yak.length));
}

function checkY(origin, length) {
  for (let i = 1; i < length; i++) {
    if (
      !player.board.board[origin.y + i][origin.x] ||
      player.board.board[origin.y + i][origin.x].yak !== 'empty'
    ) {
      console.log(`Block at ${player.board.board[origin.y + i][origin.x]}`);
      return false;
    }
  }
  //todo: ADD catches for board boundaries!
  for (let i = 1; i < length; i++) {
    if (
      !player.board.board[origin.y - i][origin.x] ||
      player.board.board[origin.y - i][origin.x].yak !== 'empty'
    ) {
      return false;
    }
  }

  return true;
}

function checkX(origin, length) {
  for (let i = 1; i < length; i++) {
    if (
      !player.board.board[origin.y][origin.x + i] ||
      player.board.board[origin.y][origin.x + i].yak !== 'empty'
    ) {
      return false;
    }
  }

  for (let i = 1; i < length; i++) {
    if (
      !player.board[origin.y][origin.x - i] ||
      player.board[origin.y][origin.x - i].yak !== 'empty'
    ) {
      return false;
    }
  }

  return true;
}

function populateBoards() {
  placeYak(createTinyYak());
  placeYak(createLargeYak());
  placeYak(createMediumYak());
  placeYak(createSmallYak());

  console.log(player.board);
}

function checkGameOver() {
  if (player.board.yaksFound()) {
    console.log('game over!');
    state = gameState.gameOver;
  }
}
