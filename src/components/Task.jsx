import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

const Task = (props) => {
  const [task, setTask] = useState(props.task);

  useEffect(() => {
    if (props.task.done != task.done) props.onChangeTask(task);
  }, [task]);

  return (
    <li className="task">
      <input
        type="checkbox"
        name="done"
        id="id"
        checked={task.done}
        onChange={() => setTask({ ...task, done: !task.done })}
      />
      <span className={task.done ? "done" : ""}>{task.title}</span>
      {task.done && (
        <a onClick={() => props.onDelete(task)}>
          <FontAwesomeIcon icon={faTrash} />
        </a>
      )}
    </li>
  );
};

export default Task;
