import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import "./ActionButton.css";

const ActionButton = (props) => (
  <a className="action-button" onClick={props.handleClick}>
    {props.state && <FontAwesomeIcon icon={faStop} size="1x" />}
    {!props.state && <FontAwesomeIcon icon={faPlay} size="1x" />}
  </a>
);

export default ActionButton;
