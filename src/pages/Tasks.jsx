import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import "/src/pages/Tasks.css";
import Navbar from "../components/Navbar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    const storedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    setGoals(storedGoals);
  }, []);

  const addTask = (newTask) => {
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="tasks-page-container">
        <h1>Tasks</h1>

        <div className="task-form-container">
          <h2 className="task-form-title">Add a new task</h2>
          <TaskForm onAddTask={addTask} goals={goals} />
        </div>

        <div className="task-list-container">
          <div className="task-list">
            <h3>Your Tasks</h3>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={`task-item ${
                    task.completed ? "task-completed" : ""
                  }`}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      className="task-checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <h4>{task.title}</h4>
                  </div>
                  {task.goal && <p className="task-goal">Goal: {task.goal}</p>}
                  {task.dueDate && <p className="due">Due: {task.dueDate}</p>}

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="no-tasks-message">No tasks yet. Add one!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
