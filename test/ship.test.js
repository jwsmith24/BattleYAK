const { createShip } = require('../src/ship');

test('Create ship with length 4', () => {
  const newShip = createShip(4);
  expect(newShip.length).toBe(4);
  expect(newShip.hits).toBe(0);
});

test('Apply hit to ship', () => {
  const newShip = createShip(4);
  newShip.hit();
  expect(newShip.hits).toBe(1);
});

test('Apply sinking hit to ship', () => {
  const newShip = createShip(2);
  newShip.hit();

  expect(newShip.isSunk()).toBe(false);

  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});
