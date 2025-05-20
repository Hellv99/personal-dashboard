import React from "react";
import "/src/pages/LearningLog.css";
const LearningLogList = ({ logs, goals }) => {
  const getGoalTitle = (goalId) =>
    goals.find((goal) => goal.id === goalId)?.title || "unknown Goal";

  return (
    <div className="log-list-container">
      {logs.length === 0 && <p className="no-logs-message">No logs yet.</p>}
      {logs.map((log) => (
        <div key={log.id} style={{ marginBottom: "1rem" }}>
          <strong>{new Date(log.date).toLocaleDateString()}</strong> //display
          date of log
          <p>
            <em>{getGoalTitle(log.goalId)}</em>
          </p>
          <p>(log.note)</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LearningLogList;
