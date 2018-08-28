import React, {Component} from "react";
//import { Link } from "react-router-dom";
import "./Trophies.css";
import ShoeCard from "../ShoeCard";


class Trophies extends Component {

  render() {
      return (

          <div className="row" id="profile-content">

          <h1 className="center">Trohpies</h1>
       
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
    
export default Trophies;
