function createShip(length) {
  return {
    length: length,
    hits: 0,
    hit: function () {
      this.hits++;
      console.log('Current hits: ' + this.hits);
    },
    isSunk: function () {
      return this.hits >= this.length;
    },
  };
}

module.exports = {
  createShip,
};
