// src/components/SummaryCard.js
import React from "react";
import "./SummaryCard.css";

const SummaryCard = ({ title, value, change, Icon, className, color }) => {
  return (
    <div className="summary-card">
      <Icon className={`icon ${className}`} />
      <h3 className="summary-title">{title}</h3>

      <div className="sum">
        <p className="summary-value">{value}</p>
        <div className={`summary-change ${color}`}>{change}</div>
      </div>
    </div>
  );
};

export default SummaryCard;