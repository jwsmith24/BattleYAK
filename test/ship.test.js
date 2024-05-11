const {
  createBattleship,
  createSubmarine,
  createDestroyer,
} = require('../src/ship');

test('Create battleship', () => {
  const battleship = createBattleship();
  expect(battleship.stats.length).toBe(4);
  expect(battleship.stats.hits).toBe(0);
});

test('Apply hit to ship', () => {
  const submarine = createSubmarine();
  submarine.stats.hit();
  expect(submarine.stats.hits).toBe(1);
});

test('Apply sinking hit to ship', () => {
  const destroyer = createDestroyer();
  destroyer.stats.hit();

  expect(destroyer.stats.isSunk()).toBe(false);

  destroyer.stats.hit();
  expect(destroyer.stats.isSunk()).toBe(true);
});
