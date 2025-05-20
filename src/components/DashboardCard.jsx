import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ label, value, icon, color }) => {
  return (
    <div className={`dashboard-card ${color}`}>
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <div className="card-content">
        <h3 className="card-value">{value}</h3>
        <p className="card-label">{label}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
