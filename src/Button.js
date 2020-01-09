import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    
    static defaultProps = {
        letterColor: "white",
        stretch: false,
    }

    /*constructor() {
        super();

    
    }*/

    render() {

        const buttonStyle = {
            padding: "18px",
            margin: "5px",
            borderRadius: !this.props.stretch ? "50%": "45%",
            width: !this.props.stretch ? "50px" : "135px",
            height: "50px",
            color: this.props.letterColor,
            backgroundColor: this.props.color,
        }

        const calcText = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: "50px",
            fontFamily: "Helvetica",
            fontSize: "40px",
        }
        

        return (
            <div style={buttonStyle}>
                <div style={calcText}>
                    {this.props.symbol}
                    
                </div>
                
            </div>
        );
    }

}

export default Button;