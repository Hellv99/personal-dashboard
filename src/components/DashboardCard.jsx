import React from "react";
import "/src/pages/Dashboard.css";

const DashboardCard = ({ label, value }) => {
  return (
    <>
      <div className="dashboard-card">
        <h3 className="label-label">{label}</h3>
        <p className="value">{value}</p>
      </div>
    </>
  );
};

export default DashboardCard;
