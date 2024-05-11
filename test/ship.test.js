const {
  createBattleship,
  createSubmarine,
  createDestroyer,
} = require('../src/ship');

test('Create battleship', () => {
  const battleship = createBattleship();
  expect(battleship.length).toBe(4);
  expect(battleship.hits).toBe(0);
});

test('Apply hit to ship', () => {
  const submarine = createSubmarine();
  submarine.hit();
  expect(submarine.hits).toBe(1);
});

test('Apply sinking hit to ship', () => {
  const destroyer = createDestroyer();
  destroyer.hit();

  expect(destroyer.isSunk()).toBe(false);

  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});
