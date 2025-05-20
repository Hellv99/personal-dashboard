import "/src/pages/Tasks.css";
import React, { useState } from "react";

const TaskForm = ({ onAddTask, goals }) => {
  const [task, setTask] = useState({
    title: "",
    goal: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task.title,
      goal: task.goal,
      dueDate: task.dueDate,
      completed: false,
    };

    onAddTask(newTask);
    setTask({ title: "", goal: "", dueDate: "" });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Task Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="goal">Related Goal:</label>
        <select id="goal" name="goal" value={task.goal} onChange={handleChange}>
          <option value="">None</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.title}>
              {goal.title}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
