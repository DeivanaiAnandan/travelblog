import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import Blog from "./Blogs";
import Contact from "./Contact";

function Header({ authenticated, setAuthenticated }) {
  console.log("Authenticated:", authenticated);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthenticated(false);
    navigate("/");
  };
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center ">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="row mt-4" style={{ flex: "1" }}>
            <div id="logo" style={{ flex: "0.6" }}>
              <link to="index.html" />
              <img src="assets/img/logo.png" alt="" />

              <h1>
                <link to="index.html" />
                <span style={{ color: "yellow" }}>Galli</span>
                <span style={{ color: "white" }}>vant</span>
              </h1>
            </div>

            <div className="social-icons mt-4" style={{ flex: "0.6" }}>
              <ul className="float-end">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            <hr></hr>
            <div className="row d-flex">
              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link to="/" className="nav-link scrollto active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link scrollto">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="nav-link scrollto">
                      Blog
                    </Link>
                  </li>

                  {authenticated && (
                    <li>
                      <Link to="/addblog" className="nav-link scrollto">
                        Write
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link to="/contact" className="nav-link scrollto">
                      Contact
                    </Link>
                  </li>
                  <li>
                    {authenticated ? (
                      <Link
                        to="/"
                        onClick={handleLogout}
                        className="nav-link scrollto"
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link to="/login-register" className="nav-link scrollto">
                        Login
                      </Link>
                    )}
                  </li>
                </ul>

                <FaBars className="mobile-nav-toggle"></FaBars>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
