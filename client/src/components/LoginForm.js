import React from "react";

const LoginForm = (props) => (

    <form onSubmit={props.handleLoginSubmit}>

        <div className="row" style={{width: "90%", margin: "20px auto 0"}}>
        
        <div className="col-sm-5">
            <input className="input-field" placeholder="Email" id="login-email-input" type="text" onChange={props.handleUserChange}></input>
        </div>

        <div className="col-sm-5">
            <input className="input-field" placeholder="Password" id="login-password-input" type="password" onChange={props.handlePasswordChange}></input>
        </div>

        <div className="col-sm-2" style={{margin: "auto 0"}}>
            <input className="waves-effect waves-light red btn" type="submit" value="LOG IN"></input>
        </div>

        <div className="center">
            <h1>{props.loginMessage}</h1>
        </div>

        </div>

    </form>
);

export default LoginForm;