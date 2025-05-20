import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Goals from "./pages/Goals.jsx";
import LearningLog from "./pages/LearningLog.jsx";
import Tasks from "./pages/Tasks.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Goals" element={<Goals />} />
        <Route path="LearningLog" element={<LearningLog />} />
        <Route path="Tasks" element={<Tasks />} />
      </Routes>
    </Router>
  </StrictMode>
);
