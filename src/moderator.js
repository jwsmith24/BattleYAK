/* eslint-disable no-unused-vars */
import { createBattleship, createCarrier, createDestroyer } from './ship';
import './style.css';
const playerModule = require('../src/player');

const p1BoardDisplay = document.getElementById('player1Board');
const p2BoardDisplay = document.getElementById('player2Board');

const gameStatusText = document.getElementById('gameStatus');
const p1YakCount = document.getElementById('p1YakCount');
const p2YakCount = document.getElementById('p2YakCount');

let player1 = playerModule.createPlayer(playerModule.playerType.REAL);
let player2 = playerModule.createPlayer(playerModule.playerType.COMPUTER);

const turns = {
  player1: 'p1',
  player2: 'p2',
};

let activeTurn = turns.player1;

function nextTurn() {
  updateYakCount();
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

populateBoards();
initBoards();

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

function updateYakCount() {
  p1YakCount.textContent = `Yaks Remaining: ${player1.board.ships.length}`;
  p2YakCount.textContent = `Yaks Remaining: ${player2.board.ships.length}`;
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
  const battleYak = [
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

  const carrierYak = [
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

  const destroyerYak = [
    {
      x: 1,
      y: 6,
    },
    {
      x: 1,
      y: 7,
    },
  ];

  player1.board.placeShip(destroyerYak, createDestroyer());
  player1.board.placeShip(carrierYak, createCarrier());
  player1.board.placeShip(battleYak, createBattleship());

  player2.board.placeShip(destroyerYak, createDestroyer());
  player2.board.placeShip(carrierYak, createCarrier());
  player2.board.placeShip(battleYak, createBattleship());
}
