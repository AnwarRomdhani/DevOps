import React from "react";

const TaskList = ({ tasks, completeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
          {!task.completed && (
            <button onClick={() => completeTask(task._id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
