import React from "react";
import config from "../../config";
import "./Cube.css";

const Cube = ({ pos, type }) => (
  <div
    className={`cube ${type}`}
    style={{
      left: pos.x,
      top: pos.y,
      height: config.cubeSize,
      width: config.cubeSize
    }}
  ></div>
);

export default Cube;
