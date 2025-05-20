import React, { useState, useEffect } from "react";
import "/src/pages/Goals.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [goalForm, setGoalForm] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    const savedGoals = localStorage.getItem("goals");
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoalForm({ ...goalForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Date.now(),
      ...goalForm,
      completed: false,
    };

    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));

    // Reset form
    setGoalForm({ title: "", description: "", date: "" });
  };

  const toggleGoalCompletion = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  return (
    <>
      <Navbar />
      <div className="main-goalform-container">
        <h2 className="goalform-text">Add a new goal</h2>
        <div className="goalform-container">
          <form id="goalform" onSubmit={handleSubmit}>
            <label htmlFor="title">Goal Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title.."
              value={goalForm.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={goalForm.description}
              onChange={handleChange}
              required
            />

            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={goalForm.date}
              onChange={handleChange}
              required
            />
            <input type="submit" value="Add Goal" className="goal-btn" />
          </form>
        </div>

        <div className="goal-list-container">
          <div className="goal-list">
            <h3>Your Goals</h3>
            {goals.length > 0 ? (
              goals.map((goal) => (
                <div key={goal.id} className="goal-item">
                  <div className="goal-header">
                    <div className="goal-title-container">
                      <input
                        type="checkbox"
                        checked={goal.completed}
                        onChange={() => toggleGoalCompletion(goal.id)}
                        className="goal-checkbox"
                      />
                      <h4 className={goal.completed ? "completed-goal" : ""}>
                        {goal.title}
                      </h4>
                    </div>
                  </div>
                  <p className={goal.completed ? "completed-goal" : ""}>
                    {goal.description}
                  </p>
                  <p className="due">Due: {goal.date}</p>

                  <button
                    onClick={() => {
                      const updatedGoals = goals.filter(
                        (g) => g.id !== goal.id
                      );
                      setGoals(updatedGoals);
                      localStorage.setItem(
                        "goals",
                        JSON.stringify(updatedGoals)
                      );
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="no-goals-message">No goals yet. Add one!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Goals;
