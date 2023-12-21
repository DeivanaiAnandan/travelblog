import React from "react";
import "../assets/style.css";

function Instagram({ instadetails }) {
  // console.log(details.image);
  function handleclick(e) {
    console.log(e.target.src);
  }
  return (
    <>
      <div className="col-md-2 mt-5 mb-5 instaimage-container">
        <img
          onClick={(e) => handleclick(e)}
          src={`${instadetails.image}`}
          style={{ width: "250px", height: "250px" }}
          className="card-img-top instagram-image"
          alt="..."
        />
      </div>
    </>
  );
}

export default Instagram;
