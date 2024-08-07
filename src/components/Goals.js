// src/components/Goals.js
import React from "react";
import "./Goals.css";

const Goals = ({ amount, change, percentage }) => {
  return (
    <div className="goals">
      <div className="left">
        <h4 className="goal-profit">Net Profits</h4>
        <p className="goal-amount">{amount}</p>
        <div className="goal-change">{change}</div>
      </div>
      <div className="percentage">
        <div className="circle">{percentage}</div>
        {/* <h5>{percentage}</h5> */}
      </div>
    </div>
  );
};

export default Goals;