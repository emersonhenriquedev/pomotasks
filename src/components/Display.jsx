import React from "react";

import "./Display.css";
import CircularProgress from "./CircularProgress";

const Display = ({ time, completed }) => {
  return (
    <div className="display">
      <div className="outer">
        <CircularProgress completed={completed}/>
        <div className="inner">
          <span>{time} </span>
        </div>
      </div>
    </div>
  );
};

export default Display;
