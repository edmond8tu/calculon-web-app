import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    
    static defaultProps = {
        letterColor: "white",
        portraitMode: true,
        stretch: false,
    }

    /*constructor() {
        super();

    
    }*/

    render() {

        const buttonPortraitStyle = {
            padding: "18px",
            margin: "5px",
            borderRadius: !this.props.stretch ? "50%": "45%",
            width: !this.props.stretch && this.props.portraitMode ? "50px" 
                : this.props.stretch && this.props.portraitMode ? "135px"
                : null,
            height: "50px",
            color: this.props.letterColor,
            backgroundColor: this.props.color,
        }

        const calcPortraitText = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: "50px",
            fontFamily: "Helvetica",
            fontSize: "40px",
        }

        const buttonLandscapeStyle = {
            padding: "18px",
            margin: "5px",
            borderRadius: !this.props.stretch ? "50%": "45%",
            width: !this.props.stretch ? "75px": "100px",
            height: "20px",
            color: this.props.letterColor,
            backgroundColor: this.props.color,
        }

        const calcLandscapeText = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: "20px",
            fontFamily: "Helvetica",
            fontSize: "15px",
        }


        return (
            <div style={this.props.portraitMode ? buttonPortraitStyle : buttonLandscapeStyle}>
                <div style={this.props.portraitMode ? calcPortraitText : calcLandscapeText}>
                    {this.props.symbol}                    
                </div>
                
            </div>
        );
    }

}

export default Button;