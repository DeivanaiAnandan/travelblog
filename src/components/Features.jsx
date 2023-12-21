import React from "react";

function Features({ items }) {
  return (
    <>
      <div className="col-md-4 mb-3 pe-5 p-0">
        <div className="card d-flex m-0 justify-content-between">
          <img
            src={`${items.image}`}
            style={{ width: "370px", height: "300px" }}
            className="card-img-top image-responsive"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>{items.title}</b>
            </h5>
            <p className="card-text">{items.content}</p>
            <p className="card-text">BY {items.author}</p>
            <p className="card-text">{items.timestamp}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
