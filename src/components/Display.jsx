import React from "react";
import styled from "styled-components";

import "./Display.css";

const Display = ({ time, completed }) => {
  // const formatDisplay = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);

  //   return `${minutes <= 9 ? "0" + minutes : minutes}:${
  //     seconds <= 9 ? "0" + seconds : seconds
  //   }`;
  // };

  const Middle = styled.div`
    background-color: #fefefe;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    transition: 1s;

    clip-path: circle(${completed}% at 50% 100%);
  `;

  return (
    <div className="display">
      <div className="outer">
        {/* <div className="middle" style={{clipPath:  circle(0% at 49% 0%)}}></div> */}
        <Middle />
        <div className="inner">
          <span>{time} </span>
        </div>
      </div>
    </div>
  );
};

export default Display;
