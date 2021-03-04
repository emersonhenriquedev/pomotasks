import React, { useState } from "react";
import Task from "./Task";

import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";

import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => setTasks([...tasks, task]);

  const handleChangeTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t.id != task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <TaskAdd onHandleAddTask={handleAddTask} />
      {/* <TaskList tasks={tasks} /> */}
      <TaskList>
        <ul>
          {tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onChangeTask={handleChangeTask}
              onDelete={handleTaskDelete}
            />
          ))}
        </ul>
      </TaskList>
    </div>
  );
};

export default TodoList;
