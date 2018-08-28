import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (

  <nav className="navbar fixed-bottom navbar-light" style={{backgroundColor: "transparent"}}>
    <div className="row" id="bottom-navbar">
      <Link className="waves-effect waves-light red btn footer-btn" to='/review'>Review</Link>
      <a className="btn-floating btn-large waves-effect waves-light red btn footer-btn"><i class="material-icons">add</i></a>
      <Link className="waves-effect waves-light red btn footer-btn" to='/profile'>Closet</Link>
    </div>
  </nav>

);

export default Navbar;
