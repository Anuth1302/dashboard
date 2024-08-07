// src/components/MainDashboard.js
import React from "react";
import "./MainDashboard.css";
import SummaryCard from "./SummaryCard";
import Activity from "./Activity";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import Goals from "./Goals";
import PopularDishes from "./PopularDishes";
import {
  BsBagCheckFill,
  BsBox2Fill,
  BsCashCoin,
  BsCalendarXFill,
} from "react-icons/bs";

const MainDashboard = () => {
  return (
    <main>
      <h2>Dashboard</h2>
      <div className="grid-container">
        <div className="summary">
          <SummaryCard
            Icon={BsBox2Fill}
            title="Total Orders"
            value="75"
            className="order"
            change="3%"
            color="green"
          />
          <SummaryCard
            Icon={BsBagCheckFill}
            title="Total Delivered"
            className="delivered"
            value="70"
            change="-3%"
            color="red"
          />
          <SummaryCard
            Icon={BsCalendarXFill}
            title="Total Cancelled"
            className="cancelled"
            value="5"
            change="3%"
            color="green"
          />
          <SummaryCard
            Icon={BsCashCoin}
            title="Total Revenue"
            className="revenue"
            value="$12k"
            change="3%"
            color="green"
          />
        </div>
        <Goals
          className="goals"
          amount="$542.3"
          change="+3%"
          percentage="70%"
        />
        <Activity className="activity" />

        <PopularDishes className="popular-dishes" />
        <RecentOrders className="recent-orders" />
        <CustomerFeedback className="customer-feedback" />
        {/* </div>   */}
      </div>
    </main>
  );
};

export default MainDashboard;