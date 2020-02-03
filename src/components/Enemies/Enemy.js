import React from "react";
import { connect } from "react-redux";
import Cube from "../Cube";
import { getEnemyPos } from "../../selectors/enemySelectors";

const Enemy = ({ pos }) => <Cube type="enemy" pos={pos} />;

const mapStateToProps = (state, ownProps) => ({
  pos: getEnemyPos(state, ownProps.id)
});

export default React.memo(connect(mapStateToProps)(Enemy));
