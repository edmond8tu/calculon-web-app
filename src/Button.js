import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    
    /*constructor() {
        super();

    
    }*/

    render() {

        const buttonStyle = {
            padding: "18px",
            margin: "0px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            color: "white",
            backgroundColor: this.props.color,
        }
        

        return (
            <div style={buttonStyle}>
                <div className="calcText">
                    {this.props.symbol}
                    
                </div>
                
            </div>
        );
    }

}

export default Button;