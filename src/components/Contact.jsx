import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import SubscribeForm from "./Subscribeform";
function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mx-auto ">
            <div
              style={{
                backgroundColor: "#FFA902",
                fontSize: "12px",
                color: "#ffffff",
                marginTop: "60px",
                padding: "20px",
              }}
            >
              <SubscribeForm></SubscribeForm>
            </div>
            <div
              style={{
                backgroundColor: "#FFA902",
                marginTop: "100px",
                padding: "20px",
                textAlign: "center",
              }}
              className="social-icons"
            >
              <h2 className="text-center mb-5 fw-bold">Follow Us</h2>
              <ul>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
