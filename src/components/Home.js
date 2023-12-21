import React, { useEffect, useState } from "react";
import Category from "./Category";
import Instagram from "./Instagram";
import { instagramdetails } from "./Instagramimages";
import ReactPaginate from "react-paginate";
import Blogposts from "./Blogposts";
import Videosection from "./Videosection";
import Footer from "./Footer";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [blogposts, setBlogposts] = useState([]);
  const [categoryposts, setCategoryposts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://65731f51192318b7db419661.mockapi.io/blogposts", {})
      .then((response) => {
        setBlogposts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://65731f51192318b7db419661.mockapi.io/categoryposts", {})
      .then((response) => {
        setCategoryposts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  //Pagination for Blogposts
  const itemsPerPage = 5;
  const pageCount = Math.ceil(blogposts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogposts.slice(startIndex, endIndex);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <h1>Where will you go next?</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" className="btn-get-started">
            <span style={{ color: "yellow", fontSize: "20px " }}>
              <b>Let's Go...</b>
            </span>
          </a>
        </div>
      </section>
      <div className="">
        <div
          className="row justify-content-evenly"
          style={{ alignItems: "space-between" }}
        >
          <h2 className="text-center mt-5 mb-5 fw-bold">Choose a Category</h2>

          <Slider {...sliderSettings}>
            {categoryposts.map((category, index) => {
              return <Category key={index} details={category}></Category>;
            })}
          </Slider>
        </div>
        <div className="container ">
          <div className=" row mx-4 justify-content-center">
            <h2 className="text-center mt-5 mb-5 fw-bold">My Travel Blog</h2>
            {currentPosts.map((posts, index) => {
              return (
                <Blogposts
                  key={index}
                  posts={posts}
                  isHomePage={true}
                ></Blogposts>
              );
            })}
          </div>
          <div></div>

          {/* Pagination component for Blogposts*/}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
        {/* <About></About> */}
        <div className="container-fluid">
          <div className="row video_sec">
            <Videosection></Videosection>
          </div>
        </div>
        <div>
          <div
            className="row justify-content-evenly"
            style={{ alignItems: "space-between" }}
          >
            <h2 className="text-center mt-5 fw-bold">Follow me Instagram</h2>
            <h3 className="text-center mb-5 fw-bold">@designhunterbd</h3>

            {instagramdetails.map((insta, index) => {
              return <Instagram key={index} instadetails={insta}></Instagram>;
            })}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row Footer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
