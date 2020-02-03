import React from "react";
import { connect } from "react-redux";
import Cube from "../Cube";
import { getPlayerPos } from "../../selectors/playerSelectors";

const Player = ({ pos }) => <Cube type="player" pos={pos}></Cube>;

const mapStateToProps = state => ({
  pos: getPlayerPos(state)
});

export default React.memo(connect(mapStateToProps)(Player));
