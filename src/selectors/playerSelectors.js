import { createSelector } from "@reduxjs/toolkit";
export const getPlayer = state => state.player;
export const getPlayerPos = createSelector([getPlayer], player => player.pos);
