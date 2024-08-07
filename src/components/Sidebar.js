import React from "react";
import { FaHome, FaChartPie, FaTasks, FaUsers } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <AiOutlineAppstore />
        <FaHome />

        <FaTasks />

        <FaUsers />
      </div>
      <div className="logout">
        <FaUsers />
      </div>
    </div>
  );
};

export default Sidebar;