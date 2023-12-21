import React, { useState } from "react";
import videoplayer from "../assets/images/Videoplayer.png";

function Videosection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=mVIjNHsF2fE";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="Videosection" onClick={openModal}>
        <div className="content">
          <h2>Tips for your First Solo Travelling</h2>
          <p>
            When you tell people about your trip, notice who is excited about
            it. Spend as much time as you can with those people as they will
            build your confidence. Try to avoid the naysayers.
          </p>
          <img src={videoplayer} alt="videoplayer" />
          <p>Watch Video</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/mVIjNHsF2fE`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Videosection;
