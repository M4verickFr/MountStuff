import React from "react";
import '../style/about.css';

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => (

  <div id="about">
    <div id="img-container"><img src={"/assets/hcl_bg.png"} /></div>
    <section id="about-container">
      <div class="member">
        <img src="/images/profile.jpg" alt="Avatar"></img>
        <p class="name">Maverick Perrollaz</p>
        <p class="role">DEVELOPPER</p>
        <div class="network">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
      <div class="member">
        <img src="/images/profile.jpg" alt="Avatar"></img>
        <p class="name">Dorian Caullireau</p>
        <p class="role">DEVELOPPER</p>
        <div class="network">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
    </section>
  </div>
);

export default About;