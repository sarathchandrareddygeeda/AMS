import React from "react";
import "../styles/nav.css";
import { useState } from "react";
import { useTheme } from "./themeContext";
import { Link } from "react-router-dom";
import b from "../media/profile.jpg"
export default function Nav({ children }) {
  const [theme, setTheme] = useState(false);
  const themer = useTheme();
  const hand = () => {
    if (theme === false) {
      setTheme(true);
      themer.hand(theme);
    } else {
      setTheme(false);
      themer.hand(theme);
    }
  };
  const handlelogout = ()=>
  {
    themer.handlogout();
  }
  return (
    <nav
      class={
        1
          ? "navbar navbar-expand-lg  navbar-dark bg-dark": 0
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ＢＩＫＥＭＯＢＩ◦
        </Link>

        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav_right">
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navk nav-link " aria-current="page" to="/">
                    Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/bikes">
                      Bike
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/spareparts">
                      Spare Parts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Repair Tools
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="navk nav-link" to="/cart">
                  🛒Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navk nav-link " aria-current="page" to="/services">
                    Services
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="navk nav-link" to="about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                {!themer.login?<Link className="navk nav-link" to="login">
                  Login
                </Link>: <p></p>
                }
              </li>
              <li className="nav-item">
                <a className="navk nav-link">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      value={theme}
                      onClick={hand}
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    {theme ? <label>🌜</label> : <label>🌞</label>}{" "}
                  </div>
                </a>
              </li>
              {(themer.login)?
              <li className="nav-item dropdown">
              
                <Link
                  className="btn btn-gradient-light text-light  nav-link dropdown-toggle"
                  role="button "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  
              
              {themer.email}&nbsp;
              <img src={b} width="25" height="25" class="d-inline-block align-top rounded-circle" alt=""/>
                </Link>
                <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to="/bikes">
                   Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bikes">
                    Order History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bikes">
                    Service History
                    </Link>
                  </li>
                  
                  <li>
                    <Link className="dropdown-item" to="/login" onClick={handlelogout}>
                      
                      
                  Logout <p></p>
                
                    </Link>
                  </li>

                </ul>
              </li>:<></>
}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
