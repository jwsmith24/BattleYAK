function createYak(length) {
  return {
    length,
    hits: 0,
    hit: function () {
      this.hits++;
    },
    isFound: function () {
      return this.hits >= this.length;
    },
  };
}

function createLargeYak() {
  return {
    ...createYak(5),
    name: 'Large Yak',
  };
}

function createMediumYak() {
  return {
    ...createYak(4),
    name: 'Medium Yak',
  };
}

function createSmallYak() {
  return {
    ...createYak(3),
    name: 'Small Yak',
  };
}

function createTinyYak() {
  return {
    ...createYak(2),
    name: 'Tiny Yak',
  };
}

module.exports = {
  createLargeYak,
  createMediumYak,
  createSmallYak,
  createTinyYak,
};
