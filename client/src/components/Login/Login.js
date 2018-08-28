import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.jpg"

const Login = (props) => (
    <div style={{ border: "1px solid #eeeeee", width: "40%", margin: "20px auto"}}>

        <div className="center" style={{marginTop: "20px"}}>
            <img src={logo} id="logo" alt="logo-image"></img>
        </div>

        
        
            <div className="center">
                <form onSubmit={props.handleLoginSubmit}>
                    <div id="app-descrpition">
                        <h5>THE SITE FOR YOUR <br></br>VIRTUAL SNEAKER CLOSET</h5>
                    </div>

                    <div className="center login-input-div" style={{width: "80%", margin: "0 auto"}}> 
                        <input className="input-field" placeholder="Username" id="login-email-input" type="text" onChange={props.handleUserChange}></input>
                    </div>

                    <div className="center login-input-div" style={{width: "80%", margin: "0 auto"}}> 
                        <input className="input-field" placeholder="Password" id="login-password-input" type="password" onChange={props.handlePasswordChange}></input>
                    </div>

                    <div style={{width: "80%", margin: "0 auto"}}>
                        <input className="waves-effect waves-light red btn" type="submit" style={{width:"100%"}} value="LOG IN"></input>
                    </div>

                    <div>
                        <label>Not a member?<Link to="/create">Join Now</Link></label>
                    </div>
                </form>
            </div>
        
        
        

    </div>
)
              
export default Login;
