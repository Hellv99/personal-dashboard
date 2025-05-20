import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Personal Dashboard</span>
        </Link>

        <button className="navbar-mobile-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/dashboard"
              className={`navbar-link ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <i className="fas fa-home"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/goals"
              className={`navbar-link ${
                location.pathname === "/goals" ? "active" : ""
              }`}
            >
              <i className="fas fa-bullseye"></i> Goals
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className={`navbar-link ${
                location.pathname === "/tasks" ? "active" : ""
              }`}
            >
              <i className="fas fa-tasks"></i> Tasks
            </Link>
          </li>
          <li>
            <Link
              to="/learninglog"
              className={`navbar-link ${
                location.pathname === "/learninglog" ? "active" : ""
              }`}
            >
              <i className="fas fa-book"></i> Learning Log
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
