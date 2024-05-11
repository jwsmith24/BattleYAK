function createShip(length) {
  return {
    length: length,
    hits: 0,
    hit: function () {
      this.hits++;
    },
    isSunk: function () {
      return this.hits >= this.length;
    },
  };
}

function createCarrier() {
  return {
    stats: createShip(4),
    name: 'Carrier',
  };
}

function createBattleship() {
  return {
    stats: createShip(4),
    name: 'Battleship',
  };
}

function createCruiser() {
  return {
    stats: createShip(3),
    name: 'Cruiser',
  };
}

function createSubmarine() {
  return {
    stats: createShip(3),
    name: 'Submarine',
  };
}

function createDestroyer() {
  return {
    stats: createShip(2),
    name: 'Destroyer',
  };
}

module.exports = {
  createCarrier,
  createBattleship,
  createCruiser,
  createSubmarine,
  createDestroyer,
};
