import React from 'react';
import '../assets/styles/style.css';
import bitmoji from '../assets/images/bitmoji.webp';


function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="description">
        <h1>I am Kejsi Carkanji</h1>
        <p>Passionate about harnessing technology to create innovative web applications that enhance user experiences and drive business success.</p>
        <a href="#project-section">
          <button>View my work</button>
        </a>
      </div>
      <div className="bitmoji">
        <img src={bitmoji} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;
