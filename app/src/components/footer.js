import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../style/footer.css';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="Footer">
      <footer>
        <div id="FooterLeft">
          <div id="Logo"> 
            <img src="/assets/logo.png" alt="Logo"></img>
            <p>Mount Stuff</p>
          </div>
          <ul id="Nav">
            <li>
              <NavLink activeClassName="is-active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/clothing">
                Clothing
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/about">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/contact">
              Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="FooterRight">
          <a href="https://facebook.com/"><FaFacebook /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
        </div>
      </footer>
      <div id="signature">
        <p>Made with ❤ by Maverick & Dorian</p>
      </div>
    </div>
  );
};

export default Footer;