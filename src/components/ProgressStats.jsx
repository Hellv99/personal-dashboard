import DashboardCard from "./DashboardCard";
import React from "react";

const ProgressStats = () => {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const logs = JSON.parse(localStorage.getItem("learningLogEntries")) || [];
  const completedTasks = tasks.filter((task) => task.completed).length;
  const completionRate =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;
  return (
    <div className="p-container">
      <DashboardCard label="Total Goals" value={goals.length} />
      <DashboardCard label="Total Tasks" value={tasks.length} />
      <DashboardCard label="Completed Tasks" value={completedTasks} />
      <DashboardCard label="Completion Rate" value={`${completionRate}%`} />
      <DashboardCard label="Learning Logs" value={logs.length} />
    </div>
  );
};

export default ProgressStats;
