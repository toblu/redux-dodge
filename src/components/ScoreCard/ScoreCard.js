import React from "react";
import { connect } from "react-redux";
import { getCurrentPoints, getHighscore } from "../../selectors/gameSelectors";
import "./ScoreCard.css";

const ScoreCard = ({ score, highscore }) => (
  <div className="score-card">
    <h3>Score: {score}</h3>
    <h3>High Score: {highscore}</h3>
  </div>
);

const mapStateToProps = state => ({
  score: getCurrentPoints(state),
  highscore: getHighscore(state)
});

export default connect(mapStateToProps)(ScoreCard);
