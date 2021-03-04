import React from "react";

import "./TaskList.css";

const TaskList = (props) => <div className="task-list"> {props.children}</div>;

export default TaskList;
