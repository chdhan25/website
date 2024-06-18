import React from 'react';
import '../styles/background.css';
import video from '../assets/dcwithhera.MP4';
import fallbackImage from '../assets/fallback-image.png';
import _default from 'emailjs-com';

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInLine
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
