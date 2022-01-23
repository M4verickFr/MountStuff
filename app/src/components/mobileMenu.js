import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import { FaSearch, FaShoppingCart } from 'react-icons/fa';

import '../style/mobileMenu.css';

export default props => {
  return (
    // Pass on our props
    <div id="mobileMenu">
      <FaSearch />
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"App"}>
        <NavLink activeClassName="is-active" to="/">
          Home
        </NavLink>
      
        <NavLink activeClassName="is-active" to="/clothing">
          Clothing
        </NavLink>
      
        <NavLink activeClassName="is-active" to="/about">
          About us
        </NavLink>
      
        <NavLink activeClassName="is-active" to="/contact">
        Contact us
        </NavLink>
      </Menu>
      <FaShoppingCart />
    </div>
  );
};
