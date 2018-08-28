import React from "react";
//import { Link } from "react-router-dom";
import "./StarReview.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const StarReview = props => (

  <div className="row" id="star-review" style={{float:"right"}}>
    <div className="col-sm-2">
      <img style={{height:"100%"}} src={require("../../images/fire.png")}></img>
    </div>
    <div className="col-sm-2" >
      <img style={{height:"100%"}} src={require("../../images/fire.png")}></img>
    </div>
    <div className="col-sm-2" >
      <img style={{height:"100%"}} src={require("../../images/fire.png")}></img>
    </div>
    <div className="col-sm-2" >
      <img style={{height:"100%"}} src={require("../../images/emptyfire.png")}></img>
    </div>
    <div className="col-sm-2" >
      <img style={{height:"100%"}} src={require("../../images/emptyfire.png")}></img>
    </div>
    
  </div>

);

export default StarReview;
