export const getEnemies = state => state.enemies.list;

export const getAllEnemyPositions = state =>
  state.enemies.list.map(enemy => enemy.pos);

export const getEnemy = (state, id) =>
  getEnemies(state).filter(enemy => enemy.id === id)[0];

export const getEnemyPos = (state, id) => getEnemy(state, id)?.pos;

export const getEnemyPosX = (state, id) => getEnemyPos(state, id)?.x || -1;

export const getEnemyPosY = (state, id) => getEnemyPos(state, id)?.y || -1;

export const getEnemyDirection = (state, id) => getEnemy(state, id)?.direction;

export const getInterval = state => state.enemies.interval;
