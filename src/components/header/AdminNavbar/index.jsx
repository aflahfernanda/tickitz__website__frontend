import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function AdminNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg navbar-light nav--edit background">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={require("../../../assets/assets/Tickitz 2.png")}
              alt="logo/image"
              width="80%"
              onClick={handleHome}
            />
          </a>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="dropdown-content">
              <a href="#">Edit Profile</a>
              <a href="index.html">Log Out</a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/manageMovie">
                  Manage Movie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manageSchedule">
                  Manage Schedule
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input type="text" name="search" placeholder="Search.." className="inputSearch" />
            </form>
            <div className="dropdown">
              <button className="dropbtn">
                <img src={require("../../../assets/assets/Ellipse 11.png")} alt="" width="70%" />
              </button>
              <div className="dropdown-content">
                <a href="#">Edit Profile</a>
                <a onClick={handleLogout} href="">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;