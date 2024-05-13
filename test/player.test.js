const playerModule = require('../src/player');

test('Create real player', () => {
  const realPlayer = playerModule.createPlayer(playerModule.playerType.REAL);

  expect(realPlayer.type).toBe(playerModule.playerType.REAL);
});

test('Create computer player', () => {
  const computerPlayer = playerModule.createPlayer(
    playerModule.playerType.COMPUTER
  );

  expect(computerPlayer.type).toBe(playerModule.playerType.COMPUTER);
});
