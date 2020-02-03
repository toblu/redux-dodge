import React from "react";
import { connect } from "react-redux";
import Enemy from "./Enemy";
import { getEnemyIds } from "../../selectors/enemySelectors";

const Enemies = ({ enemyIds }) =>
  enemyIds.map(id => <Enemy key={id} id={id}></Enemy>);

const mapStateToProps = state => ({
  enemyIds: getEnemyIds(state)
});

export default React.memo(connect(mapStateToProps)(Enemies));
