import React, { useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LearningLogChart = () => {
  // Use the correct localStorage key "learningLogEntries" instead of "logs"
  const logs = JSON.parse(localStorage.getItem("learningLogEntries")) || [];

  // Add console logs to debug
  console.log("Learning logs from localStorage:", logs);

  const countsByDate = {};

  logs.forEach((log) => {
    const date = new Date(log.date).toLocaleDateString();
    countsByDate[date] = (countsByDate[date] || 0) + 1;
  });

  const data = Object.entries(countsByDate).map(([date, count]) => ({
    date,
    count,
  }));

  // Log the processed data
  console.log("Processed chart data:", data);

  return (
    <div className="logchart">
      <h3>Learning Logs Over Time</h3>
      {data.length === 0 ? (
        <p>No learning logs found. Add some entries to see your progress!</p>
      ) : (
        <ResponsiveContainer width={"100%"} height={"300px"}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LearningLogChart;
