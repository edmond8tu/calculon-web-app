import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    
    static defaultProps = {
        letterColor: "white",
        portraitMode: true,
        stretch: false,
    }

    constructor(props) {
        super(props);

        this.state = {
            currentColor: props.color,
        };
    
    }

    changeColor(e, color) {
        //document.getElementById("buttonContainer").style.backgroundColor = color;
        //document.getElementById("nestedButton").style.backgroundColor = color;
        e.target.style.backgroundColor = color;
        
    }

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
            backgroundColor: this.state.currentColor,
            overflow: "hidden",
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
            width: !this.props.stretch ? "75px": "300px",
            height: "20px",
            color: this.props.letterColor,
            backgroundColor: this.state.currentColor,
        }

        const calcLandscapeText = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: "20px",
            fontFamily: "Helvetica",
            fontSize: "20px",
        }

        const mapColors = {
            "rgb(142, 142, 147)": "rgb(209, 209, 214)", 
            "#FF9500": "white",
            "rgb(44, 44, 46)": "rgb(174, 174, 178)",
            "rgb(28, 28, 30)": "rgb(99, 99, 102)",
        };


        return (
            <div id="buttonContainer" style={this.props.portraitMode ? buttonPortraitStyle : buttonLandscapeStyle} onTouchStart={() => this.setState({currentColor: mapColors[this.props.color]})} onTouchEnd={() => this.setState({currentColor: this.props.color})}>
                <div id="nestedButton" style={this.props.portraitMode ? calcPortraitText : calcLandscapeText} onTouchStart={() => this.setState({currentColor: mapColors[this.props.color]})} onTouchEnd={() => this.setState({currentColor: this.props.color})}>
                    {this.props.symbol}                    
                </div>
                
            </div>
        );
    }

}

export default Button;