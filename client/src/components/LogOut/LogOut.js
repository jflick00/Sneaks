import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./LogOut.css";
import logo from "../../images/logo.jpg"

const LogOut = (props) => (

    <div style={{ border: "1px solid #eeeeee", width: "40%", margin: "20px auto"}}>

        <div className="center" style={{marginTop: "20px"}}>
            <img src={logo} id="logo" alt="logo-image"></img>
            <br></br>
            <img style={{height:"75px", borderBottom: "solid 2px #eeeeee", paddingBottom: "10px"}} src={require("../../images/profile.png")}></img>
            <br></br>
            <h3><strong>@{props.userName}</strong> is logged in</h3>
        </div>

        <div className="center">
            <div>
                
            </div>
            <div>
                <input className="waves-effect waves-light red btn" style={{width: "80%", color: "#ffffff", marginBottom: "10px"}} type="submit" value="LOG OUT" onClick={props.handleLogout}></input>
            </div>
        </div>

    </div>   
);

export default LogOut;
