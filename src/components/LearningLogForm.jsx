import React, { useState, useEffect } from "react";
import "./LearningLogform.css";

const LearningLogForm = () => {
  const [entries, setEntries] = useState([]);
  const [goals, setGoals] = useState([]);
  const [newEntry, setNewEntry] = useState({
    note: "",
    goal: "",
    date: new Date().toISOString().split("T")[0],
  });

  // Load entries and goals from localStorage on mount
  useEffect(() => {
    const storedEntries = JSON.parse(
      localStorage.getItem("learningLogEntries") || "[]"
    );
    const storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
    setEntries(storedEntries);
    setGoals(storedGoals);
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("learningLogEntries", JSON.stringify(entries));
  }, [entries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // When saving entries:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.note.trim()) return;

    const entry = {
      id: Date.now(),
      note: newEntry.note,
      goal: newEntry.goal,
      date: newEntry.date,
      timestamp: new Date().toISOString(),
    };

    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
    localStorage.setItem("learningLogEntries", JSON.stringify(updatedEntries));

    // Reset form
    setNewEntry({ note: "", goal: "", date: "" });
  };

  // When loading entries (in useEffect):
  useEffect(() => {
    const savedEntries = localStorage.getItem("learningLogEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  return (
    <div className="learning-log-container">
      <form onSubmit={handleSubmit} className="log-form">
        <div className="form-group">
          <label htmlFor="note">Learning Note:</label>
          <textarea
            id="note"
            name="note"
            value={newEntry.note}
            onChange={handleInputChange}
            required
            placeholder="What did you learn today?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="goal">Linked Goal:</label>
          <select
            id="goal"
            name="goal"
            value={newEntry.goal}
            onChange={handleInputChange}
          >
            <option value="">None</option>
            {goals.map((goal) => (
              <option key={goal.id} value={goal.title}>
                {goal.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEntry.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Save Entry
        </button>
      </form>

      <div className="entries-list">
        <h3>Past Entries</h3>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id} className="log-entry">
              <div className="entry-date">{entry.date}</div>
              {entry.goal && (
                <div className="entry-goal">Goal: {entry.goal}</div>
              )}
              <div className="entry-note">{entry.note}</div>
            </div>
          ))
        ) : (
          <p className="no-entries-message">
            No entries yet. Add your first learning log!
          </p>
        )}
      </div>
    </div>
  );
};

export default LearningLogForm;
