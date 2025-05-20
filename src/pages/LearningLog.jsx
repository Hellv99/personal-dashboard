import React from "react";
import LearningLogForm from "../components/LearningLogForm";
// Import your preferred alternative
import LearningLogStats from "../components/LearningLogStats";
// Or import LearningLogCalendar from "../components/LearningLogCalendar";
// Or import LearningLogProgress from "../components/LearningLogProgress";
import Navbar from "../components/Navbar";
import "../components/LearningLogform.css";

function LearningLog() {
  return (
    <>
      <Navbar />
      <div className="learning-log-page">
        <div className="page-header">
          <h1>Learning Log</h1>
          <p>Track what you've learned and connect it to your goals</p>
        </div>

        {/* Replace LearningLogChart with your preferred alternative */}
        <LearningLogStats />
        {/* Or <LearningLogCalendar /> */}
        {/* Or <LearningLogProgress /> */}

        <div className="form-card">
          <LearningLogForm />
        </div>
      </div>
    </>
  );
}

export default LearningLog;
