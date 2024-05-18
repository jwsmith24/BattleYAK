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

function createLargeYak() {
  return {
    ...createShip(5),
    name: 'Large Yak',
  };
}

function createMediumYak() {
  return {
    ...createShip(4),
    name: 'Battleship',
  };
}

function createSmallYak() {
  return {
    ...createShip(3),
    name: 'Cruiser',
  };
}

function createTinyYak() {
  return {
    ...createShip(2),
    name: 'Destroyer',
  };
}

module.exports = {
  createLargeYak,
  createMediumYak,
  createSmallYak,
  createTinyYak,
};
