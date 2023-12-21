// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import "./assets/style.css";
import Category from "./components/Category";
import { categorydetails } from "./components/categoryimages";
import Instagram from "./components/Instagram";
import { instagramdetails } from "./components/Instagramimages";
import Features from "./components/Features";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import Blogposts from "./components/Blogposts";
import Videosection from "./components/Videosection";
import Footer from "./components/Footer";
import Popularposts from "./components/Popularposts";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Addblog from "./components/Addblog";
import Contact from "./components/Contact";
import Categorypage from "./components/Categorypage";
import Fullblogpage from "./components/Fullblogpage";
import Loginform from "./components/Loginform";
import Loginregister from "./components/Loginregister";
import Registrationform from "./components/Registrationform";
import Allblogs from "./components/Blogs";
import Editblog from "./components/Editblog";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
      <div className="container-fluid ">
        <Header
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={<Allblogs authenticated={authenticated} />}
          />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/editblog/:postId" element={<Editblog />} />
          <Route path="/fullblog/:postId" element={<Fullblogpage />} />
          <Route
            path="/categoryblogposts/:category"
            element={<Categorypage />}
          />
          <Route path="/login-register" element={<Loginregister />} />
          <Route
            path="/loginform"
            element={
              <Loginform
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route path="/registrationform" element={<Registrationform />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
