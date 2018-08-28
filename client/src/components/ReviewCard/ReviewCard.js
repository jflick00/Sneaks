import React from "react";
//import { Link } from "react-router-dom";
import "./ReviewCard.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const ReviewCard = props => (

  <div className="box" style={{float:"right"}}>
    <img className="review-card" src={require("../../images/Shoes/" + props.selectRandomShoe + ".jpg")}></img>
  </div>

);

export default ReviewCard;