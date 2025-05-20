import React from "react";
import LearningLogForm from "../components/LearningLogForm";
import Navbar from "../components/Navbar";

function LearningLog() {
  return (
    <>
      <Navbar />
      <div className="learning-log-page">
        <h1>Learning Log</h1>
        <p>Track what you've learned and connect it to your goals</p>
        <LearningLogForm />
      </div>
    </>
  );
}

export default LearningLog;
