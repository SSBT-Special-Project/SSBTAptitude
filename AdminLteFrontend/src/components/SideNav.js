/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      {" "}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">SSBT COET</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Admin LTE
              </a>
            </div>
          </div>
         
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <Link to='/home'>
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a> 
                </Link>               
              </li>
             <li className="nav-item">
             <Link to='/exam_list'>
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Exam List</p>
                </a>
                </Link>  
              </li>
              <li className="nav-item">
              <Link to='/profile'>
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Profile</p>
                </a>
              </Link>
              </li>
              <li className="nav-item">
              <Link to='/settings'>
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Settings</p>
                </a>
              </Link>
              </li>            
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
