import React, { useState } from "react";
import uuid from "react-uuid";

import "./TaskAdd.css";

const TaskAdd = ({ onHandleAddTask }) => {
  const initialTaskState = {
    id: undefined,
    title: "",
    done: false,
    estimatesPomodoros: 0,
  };

  const [task, setTask] = useState(initialTaskState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title) return;

    task.id = uuid();
    onHandleAddTask(task);

    setTask(initialTaskState);
  };

  return (
    <form action="">
      <div>
        <input
          className=""
          type="text"
          name="taskTitle"
          id=""
          placeholder="what are you working on?"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>

      <div className="footer">
        <button onClick={handleSubmit}>Add</button>
      </div>
    </form>
  );
};

export default TaskAdd;
