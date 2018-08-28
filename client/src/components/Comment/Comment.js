import React from "react";
//import { Link } from "react-router-dom";
import "./Comment.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Comment = props => (

  <div id="box" style={{float:"left"}}>

    <div className="row" style={{marginTop: "20px"}}>
      <div className="comment-section-row" id="comments-section">
        Comments Here
      </div>
    </div>

    <div className="form-group row comment-section-row" id="user-comment">
      <input type="email" className="form-control" id="comment" aria-describedby="emailHelp" placeholder="Comment"></input>
      <a className="waves-effect waves-light red btn">Submit</a>
    </div>

  </div>

);

export default Comment;
