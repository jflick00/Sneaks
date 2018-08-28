import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../images/logo.png'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => (

  <nav>
    <div className="nav-wrapper">

      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/home" style={{color: "#939393"}}><i className="medium material-icons" title="Home">home</i></Link></li>
        <li><Link to="/login" style={{color: "#939393"}}><i className="medium material-icons" title="Login">person</i></Link></li>
        <li>{props.loggedIn ? <Link to="/profile" style={{color: "#939393"}}><i className="medium material-icons" title="Profile">grid_on</i></Link> : null}</li>
        <li>{props.loggedIn ? <Link to="/review" style={{color: "#939393"}}><i className="medium material-icons" title="Review">star</i></Link> : null}</li>
      </ul>
      
      <div className="brand-logo center" id="navbar-logo" >
        <Link to="/home"><img src={logo} id="logo"></img></Link>
      </div>

    </div>
  </nav>

);

export default Navbar;

