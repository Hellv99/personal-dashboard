import React from "react";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <span className="task-title">{task.title}</span>
              {task.goal && (
                <span className="task-goal">Goal: {task.goal}</span>
              )}
              {task.dueDate && (
                <span className="task-due">Due: {task.dueDate}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default TaskList;
