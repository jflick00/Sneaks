import React, {Component} from "react";
//import { Link } from "react-router-dom";
import "./ProfileInfo.css";


const ProfileInfo = (props) => (
  <div className="row" id="profile-info">

            <div className="col sm-5">
              <div id="profile-pic">
              <img style={{height:"100%"}} src={require("../../images/profile.png")}></img>
              </div>
            </div>

            <div className="col-sm-7" style={{margin: "auto 0"}}>
              <div className="row info" style={{marginBottom:0}}>
                <h3 style={{marginBottom:0, color: "#706e6f"}}>@{props.userName}</h3>
              </div>

              <div className="row info" style={{marginBottom: 0}}>
                <div style={{padding: "0 0", margin: "0 0"}}>
                  <h1 style={{margin: "0 0", color:"#706e6f"}}><strong style={{color: "#ee534f"}}>{props.shoes.length}</strong> sneakers</h1>
                </div>

      
              </div>

            </div>

          </div>
);
          
          

    
export default ProfileInfo;
