import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //or Early Return Pattern
  if (!isMenuOpen) return null;

  //or return !isMenuOpen ? null : (

  return !isMenuOpen ? null : (
    <div className="sidebar-wrapper shadow-lg px-8 py-4 w-[20%] text-left">
      <div className="sidebar-category py-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="sidebar-category py-4">
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="sidebar-category py-4">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
