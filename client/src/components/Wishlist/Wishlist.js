import React, {Component} from "react";
//import { Link } from "react-router-dom";
import "./Wishlist.css";
import ShoeCard from "../ShoeCard";


class Wishlist extends Component {

  render() {
      return (

          <div className="row" id="profile-content">
          <h1 className="center">Wishlist</h1>       
            <div id="content-grid">
              <div className="row">
                <div className="col sm-2">
                  <ShoeCard/>
                </div>

                </div>
          </div>
          </div>
          
      )
  }
  
  
  };
    
export default Wishlist;
