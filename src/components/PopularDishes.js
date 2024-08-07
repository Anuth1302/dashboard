// src/components/PopularDishes.js
import React from "react";
import "./PopularDishes.css";
import { TiThMenu } from "react-icons/ti";
import { BiDish } from "react-icons/bi";
import { GoGoal } from "react-icons/go";

const PopularDishes = () => {
  return (
    <div className="popular-dishes">
      <div className="first">
        <GoGoal className="first-icon" />
        <span>Goals</span>
      </div>
      <div className="second">
        <BiDish className="second-icon" />
        <span>Popular Dishes</span>
      </div>
      <div className="third">
        <TiThMenu className="third-icon" />
        <span>Menus</span>
      </div>
    </div>
  );
};

export default PopularDishes;