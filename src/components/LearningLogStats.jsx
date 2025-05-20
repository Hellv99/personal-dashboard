import React from "react";
import "./LearningLogStats.css";

const LearningLogStats = () => {
  const logs = JSON.parse(localStorage.getItem("learningLogEntries")) || [];

  // Count logs by date
  const countsByDate = {};
  logs.forEach((log) => {
    if (log && log.date) {
      const date = new Date(log.date).toLocaleDateString();
      countsByDate[date] = (countsByDate[date] || 0) + 1;
    }
  });

  // Get total logs
  const totalLogs = logs.length;

  // Get unique dates with logs
  const uniqueDates = Object.keys(countsByDate).length;

  // Get most active day
  let mostActiveDay = "";
  let mostActiveDayCount = 0;

  Object.entries(countsByDate).forEach(([date, count]) => {
    if (count > mostActiveDayCount) {
      mostActiveDay = date;
      mostActiveDayCount = count;
    }
  });

  // Get recent activity (last 7 days)
  const last7Days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    last7Days.push(date.toLocaleDateString());
  }

  const recentLogsCount = last7Days.reduce((count, date) => {
    return count + (countsByDate[date] || 0);
  }, 0);

  return (
    <div className="learning-log-stats">
      <h3>Learning Log Statistics</h3>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">{totalLogs}</div>
          <div className="stat-label">Total Entries</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{uniqueDates}</div>
          <div className="stat-label">Days with Entries</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">{recentLogsCount}</div>
          <div className="stat-label">Last 7 Days</div>
        </div>

        {mostActiveDay && (
          <div className="stat-card">
            <div className="stat-value">{mostActiveDayCount}</div>
            <div className="stat-label">Most Active Day ({mostActiveDay})</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningLogStats;
