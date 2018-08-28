import React from "react";
import Login from "../components/Login";
import LogOut from "../components/LogOut";

const LoginP = (props) => {

    if (props.loggedIn) {
      return <LogOut {...props}/>
    } else {
      return <Login {...props}/>
    }

};
  
export default LoginP;
