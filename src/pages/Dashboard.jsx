import React from "react";
import "/src/pages/Dashboard.css";
import ProgressStats from "../components/ProgressStats";
import Navbar from "../components/Navbar";
import LearningLogStats from "../components/LearningLogStats";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">DASHBOARD</h1>
        <h2>Your Progress Dashboard</h2> <br />
        <p>Track how you're doing with your goals, tasks and learning.</p>
        <ProgressStats />
        <LearningLogStats />
      </div>
    </>
  );
};

export default Dashboard;
