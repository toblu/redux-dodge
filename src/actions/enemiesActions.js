import { createAction } from "@reduxjs/toolkit";

export const ADD_ENEMY = "enemies/ADD";
export const addEnemy = createAction(ADD_ENEMY);

export const REMOVE_ENEMY = "enemies/REMOVE";
export const removeEnemy = createAction(REMOVE_ENEMY);

export const MOVE_ENEMY = "enemies/MOVE_ENEMY";
export const moveEnemy = createAction(MOVE_ENEMY);

export const SET_INTERVAL = "enemies/SET_INTERVAL";
export const setEnemyInterval = createAction(SET_INTERVAL);
