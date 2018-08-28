import React, {Component} from "react";

const AddCard = props => (
    <div className="center" style={{width: "100%", backgroundColor: "#f6f6f6"}}>
        {props.addshoes.map(shoe => (
            <img id={shoe} src={require("../images/Shoes/" + shoe + ".jpg")} key={shoe} style={{width:"30%", cursor:"pointer"}}  onClick={props.handleAddShoeClick}/> 
        ))}
    </div>
    
)

export default AddCard