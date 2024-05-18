function createShip(length) {
  return {
    length,
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
    ...createShip(5),
    name: 'Large Yak',
  };
}

function createBattleship() {
  return {
    ...createShip(4),
    name: 'Battleship',
  };
}

function createCruiser() {
  return {
    ...createShip(3),
    name: 'Cruiser',
  };
}

function createDestroyer() {
  return {
    ...createShip(2),
    name: 'Destroyer',
  };
}

module.exports = {
  createCarrier,
  createBattleship,
  createCruiser,
  createDestroyer,
};
