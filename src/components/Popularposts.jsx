import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Popularposts({ pposts }) {
  return (
    <>
      <div></div>
      <div className="card mb-3 popularposts">
        <div className="row d-flex justify-content-center align-items-center g-0">
          <div className="col-md-6">
            {/* <img src={`${pposts.image}`} className="img-fluid rounded-start" alt="..." /> */}

            <Link
              to={{
                pathname: `/fullblog/${pposts.id}`,
                state: { post: pposts },
              }}
            >
              <img
                src={`${pposts.image}`}
                className="img-fluid rounded-start img-thumbnail"
                alt="Thumbnail"
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title popularposts_title">
                <b>{pposts.title}</b>
              </h5>
              <p className="card-text popularposts_title_content">
                {pposts.content}
              </p>
              <p className="card-text popularposts_category">
                {pposts.category} <span style={{ color: "black" }}>BY </span>
                {pposts.author}
              </p>
              <p className="card-text">{pposts.timestamp}</p>
              <Link
                to={{
                  pathname: `/fullblog/${pposts.id}`,
                  state: { post: pposts },
                }}
                className="btn btn-primary read_more"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popularposts;
