import React from "react";
import my_photo from "../assets/images/WhatsApp Image 2024-09-12 at 11.19.47 AM.jpeg";
import "../assets/styles/style.css";

function About() {
  return (
    <section className="about" id="about">
      <img src={my_photo} alt="profile" />
      <div className="general-info">
        <h1>About me</h1>
        <p>
          Hello! I’m Kejsi Carkanji, a passionate Computer Engineering graduate.
          My journey in technology has been fueled by a desire to harness
          innovation...
        </p>
      </div>
    </section>
  );
}

export default About;
