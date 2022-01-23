import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import '../style/header.css';

import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div id="Logo">
        <a href="/">
          <img src="/assets/logo.png" alt="Logo"></img>
        </a>
      </div>
      <div id="Menu">
        <nav id="MenuLeft" role="navigation" aria-label="main navigation">
          <ul>
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
        </nav>
        <div id="MenuRight">
          <ul>
            <li>
              <a href="/">
                <FaSearch />
              </a>
            </li>
            <li>
              <a href="/">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </div >
      </div>
    </header>
  );
};

export default Header;