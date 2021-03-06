import { createSelector } from "@reduxjs/toolkit";

export const getInterval = state => state.enemies.interval;

export const getEnemies = state => state.enemies.list;

export const getEnemy = (state, id) =>
  createSelector(
    [getEnemies],
    enemies => enemies.filter(enemy => enemy.id === id)[0]
  )(state);

export const getEnemyPos = createSelector([getEnemy], enemy => enemy.pos);

export const getAllEnemyPositions = createSelector([getEnemies], enemies =>
  enemies.map(enemy => enemy.pos)
);

export const getEnemyIds = createSelector([getEnemies], enemies =>
  enemies.map(enemy => enemy.id)
);
