export const getPlayer = state => state.player;
export const getPlayerPos = state => state.player.pos;
export const getPlayerPosX = state => getPlayerPos(state).x;
export const getPlayerPosY = state => getPlayerPos(state).y;
