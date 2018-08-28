import React from "react";
import HomeLogo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import LoginForm from "../components/LoginForm"

const Home = (props) => ( 
  
  <div style={{width: "60%", margin: "0 auto"}} className="animated bounceInRight faster">

    <div style={{border: "1px solid #eeeeee"}}>

      <div className="row" style={{margin: "20px 0 0 0"}}>
        <h2 style={{margin: "0 auto", color: "#939393"}}>Welcome to</h2>
      </div>
    
      <div className="row" style={{marginBottom: 0}} >
        <img src={HomeLogo} style={{width: "80%", height: "80%", margin: "0 auto"}}id="HomeLogo"></img>
      </div>

      <div className="row">
        <h5 style={{margin: "0 auto", color: "#939393"}}>You are currently {props.loggedIn ? 'logged in' : 'not logged in'} </h5>
      </div>
      
    </div>

    {props.loggedIn ? null : <LoginForm {...props}/>}
  
  </div>
);
  

export default Home;


