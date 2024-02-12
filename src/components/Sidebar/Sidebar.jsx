import React, { useEffect } from "react";
import "./Sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSidebarStatus, setSidebarOff } from "../../store/SidebarSlice";
import { getAllCategories } from "../../store/CategorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);
  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button
        type="button"
        className="sidebar-hide-btn"
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.slice(0,8).map((category, idx) => (
            <li key={idx}>
              <Link to={`category/${category}`} className="cat-list-link text-capitalize">{category.replace('-', ' ')}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
