export const getEnemies = state => state.enemies.list;

export const getAllEnemyPositions = state =>
  state.enemies.list.map(enemy => enemy.pos);

export const getEnemy = (state, id) =>
  getEnemies(state).filter(enemy => enemy.id === id)[0];

export const getInterval = state => state.enemies.interval;
