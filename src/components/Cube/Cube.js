import React from "react";
import "./Cube.css";

const Cube = ({ pos, type }) => (
  <div className={`cube ${type}`} style={{ left: pos.x, top: pos.y }}></div>
);

export default React.memo(Cube);
