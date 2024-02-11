import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleCompact = () => setIsCompact(!isCompact);

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <div
      className={`nk-sidebar nk-sidebar-fixed is-dark ${
        isCompact ? "is-compact" : ""
      }`}
      data-content="sidebarMenu"
    >
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-menu-trigger">
          <a
            href="#"
            className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
            data-target="sidebarMenu"
            onClick={toggleCompact}
          >
            <em className="icon ni ni-arrow-left"></em>
          </a>
          <a
            href="#"
            className={`nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex ${
              isCompact ? "compact-active" : ""
            }`}
            data-target="sidebarMenu"
            onClick={toggleCompact}
          >
            <em className="icon ni ni-menu"></em>
          </a>
        </div>
        <div className="nk-sidebar-brand">
          <Link to="/dashboard" className="logo-link nk-sidebar-logo">
            <img
              className="logo-light logo-img"
              src="./images/logo.png"
              srcset="./images/logo2x.png 2x"
              alt="logo"
            />
            <img
              className="logo-dark logo-img"
              src="./images/logo-dark.png"
              srcset="./images/logo-dark2x.png 2x"
              alt="logo-dark"
            />
          </Link>
        </div>
      </div>
      <div className="nk-sidebar-element nk-sidebar-body">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar>
            <ul className="nk-menu">
              <li className="nk-menu-item">
                <Link to="/dashboard" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-dashboard-fill"></em>
                  </span>
                  <span className="nk-menu-text">Dashboard</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link to="/Users">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-user-list-fill"></em>
                    </span>
                    <span className="nk-menu-text">User Managment</span>
                  </a>
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  activeSubMenu === 1 ? "active" : ""
                } has-sub`}
              >
                <a
                  href="#"
                  className="nk-menu-link nk-menu-toggle"
                  onClick={() => toggleSubMenu(1)}
                >
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-layers-fill"></em>
                  </span>
                  <span className="nk-menu-text">Employee Management</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a href="#" className="nk-menu-link">
                      <span className="nk-menu-text">Add Employee</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="#" className="nk-menu-link">
                      <span className="nk-menu-text">Update Employee</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item">
                <Link to="/Customers">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-calendar-check-fill"></em>
                    </span>
                    <span className="nk-menu-text">Customers</span>
                  </a>
                </Link>
              </li>
              <li className="nk-menu-item ">
                <Link to="/Transactions">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-notice"></em>
                    </span>
                    <span className="nk-menu-text">Transactions</span>
                  </a>
                </Link>
              </li>
              <li className="nk-menu-item ">
                <Link to="/Email">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-notice"></em>
                    </span>
                    <span className="nk-menu-text">Email Managmnet</span>
                  </a>
                </Link>
              </li>
              <li className="nk-menu-item ">
                <Link to="/Blog">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-notice"></em>
                    </span>
                    <span className="nk-menu-text">Manage Blog</span>
                  </a>
                </Link>
              </li>
              <li className="nk-menu-item ">
                <Link to="/Archieves">
                  <a href="#" className="nk-menu-link">
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-notice"></em>
                    </span>
                    <span className="nk-menu-text">Manage Archieves</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
