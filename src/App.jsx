import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/animations.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Tasks from "./pages/Tasks";
import LearningLog from "./pages/LearningLog";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/learninglog" element={<LearningLog />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="slide-in-top">Welcome to Your Personal Dashboard</h1>
        <p className="fade-in">
          Track your goals, manage tasks, and log your learning journey
        </p>

        <div className="cta-buttons">
          <Link to="/dashboard" className="cta-button primary pulse">
            Go to Dashboard
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>

        <div className="feature-cards">
          <div className="feature-card slide-in-left">
            <div className="feature-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Goal Tracking</h3>
            <p>Set and track your personal and professional goals</p>
            <Link to="/goals" className="feature-link">
              Manage Goals <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card slide-in-top">
            <div className="feature-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <h3>Task Management</h3>
            <p>Organize your tasks and track your progress</p>
            <Link to="/tasks" className="feature-link">
              Manage Tasks <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="feature-card slide-in-right">
            <div className="feature-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Learning Log</h3>
            <p>Document your learning journey and insights</p>
            <Link to="/learninglog" className="feature-link">
              View Learning Log <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <h3>https://github.com/Hellv99</h3>
        Built by Feyi- learning in public
      </footer>
    </div>
  );
}

export default App;
