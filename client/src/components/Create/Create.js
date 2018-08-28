import React from "react";
import Logo from "../../images/logo.jpg";
import {Link} from "react-router-dom";

const Create = (props) => ( 
    <div style={{ border: "1px solid #eeeeee", width: "40%", margin: "20px auto"}}>

    <div className="center">
        <a href="#"><img src={Logo} id="logo" alt="logo-image"></img></a>
    </div>

    <div className="center">

        <div id="app-descrpition">
            <h4>THE SITE FOR YOUR <br></br>VIRTUAL SNEAKER CLOSET</h4>
        </div>

        <form onSubmit={props.handleCreateUser}>

            <div className="center login-input-div row" style={{width: "80%", margin: "0 auto"}}> 
                <input className="input-field" placeholder="Username" id="create-username-input" type="text" onChange={props.handleCreateUserChange}></input>
            </div>

            <div className="center login-input-div row" style={{width: "80%", margin: "0 auto"}}> 
                <input className="input-field" placeholder="Password" id="create-password-input" type="password" onChange={props.handleCreatePasswordChange}></input>
            </div>

            <div className="center login-input-div row" style={{width: "80%", margin: "0 auto"}}> 
                <input className="input-field" placeholder="Confirm Password" id="create-confirm-password-input" type="password" onChange={props.handleCreatePasswordCChange} ></input>
            </div>

           {/*  <div className="row" style={{width: "80%", margin: "0 auto"}}>
                {props.passwordConfirm}? <label ></label> : <label></label>}
            </div> */}

            <div style={{marginBottom: "15px"}}>
                <input className="waves-effect waves-light red btn" type="submit" style={{width: "80%"}} value="CREATE"></input>
            </div>

        </form>

    </div>

</div>  

);

export default Create;

{/* <div style={{width: "60%", margin: "0 auto"}}>

    <div style={{border: "1px solid #eeeeee"}}>
      <div className="row" style={{margin: "20px 0 0 0"}}>
        <h2 style={{margin: "0 auto", color: "#939393"}}>Welcome to</h2>
      </div>
    
      <div className="row" style={{marginBottom: 0}} >
        <img src={HomeLogo} style={{width: "80%", height: "80%", margin: "0 auto"}}id="HomeLogo"></img>
      </div>

    </div>

    <form onSubmit={props.handleCreateUser}>
        <div className="row" style={{width: "90%", margin: "20px auto 0"}}>
        
            <div className="col-sm-5">
            <input className="input-field" placeholder="Email" id="login-email-input" type="text" onChange={props.handleCreateUserChange}></input>
            </div>

            <div className="col-sm-5">
            <input className="input-field" placeholder="Password" id="login-password-input" type="text" onChange={props.handleCreatePasswordChange}></input>
            </div>

            <div className="col-sm-2" style={{margin: "auto 0"}}>
            <input className="waves-effect waves-light red btn" type="submit" value="CREATE"></input>
            </div>

        </div>
    </form>
    
  </div> */}
            