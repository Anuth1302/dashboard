import "./Header.css";
import { FaHome, FaChartPie, FaTasks, FaUsers } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Header() {
  return (
    <header className="header-container">
      <div className="search">
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
        />
        <button>Go</button>
      </div>
      <div className="header-item">
        <AiFillInfoCircle />
        <FaHome />

        <FaChartPie />
      </div>
    </header>
  );
}