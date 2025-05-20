import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Mylogo</div>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Goals" className="link">
              Goals
            </Link>
          </li>
          <li>
            <Link to="/LearningLog" className="link">
              Learning Log
            </Link>
          </li>
          <li>
            <Link to="/Tasks" className="link">
              Tasks
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
