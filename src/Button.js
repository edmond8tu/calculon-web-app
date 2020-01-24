import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    
    static defaultProps = {
        letterColor: "white",
        portraitMode: true,
        stretch: false,
        specialText: false,
        plusMinus: false,
        specialSymbol: false,
        percentSymbol: false,
        operationSymbol: false,
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

        const mapColors = {
            "rgb(142, 142, 147)": "rgb(209, 209, 214)", 
            "#f1a33c": "white",
            "rgb(44, 44, 46)": "rgb(174, 174, 178)",
            "rgb(28, 28, 30)": "rgb(99, 99, 102)",
        };

        let hold = "21vw";

        const buttonPortraitStyle = {
            //padding: "5% 0",
            margin: ".3vw 1.5vw 1.5vw 1.5vw",
            borderRadius: !this.props.stretch ? "50%": hold,
            width: !this.props.stretch && this.props.portraitMode ? hold
                : this.props.stretch && this.props.portraitMode ? "45vw"
                : null,
            height: hold,
            color: this.props.letterColor,
            backgroundColor: this.state.currentColor,
            overflow: "hidden",
            transition: this.state.currentColor in mapColors ? "1s" : "0s",
        }

        const calcPortraitText = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: !this.props.specialSymbol ? "21vw" : "19vw",
            //textAlign: "center",
            //alignItems: "center",
            fontFamily: "-apple-system",
            fontSize:  this.props.specialSymbol ? "11vw" : "10vw",
            paddingLeft: !this.props.stretch ? "0%" : "18%",
            fontWeight: this.props.specialSymbol ? "400" : "400",
        }

        const calcPortraitText2 = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight: this.props.symbol == "%" ? "18vw" : "21vw",
            //textAlign: "center",
            //alignItems: "center",
            fontFamily: "-apple-system",
            fontSize:  this.props.plusMinus ? "9vw" : "10vw",
            paddingLeft: !this.props.stretch ? "0%" : "18%",
            fontFeatureSettings: "frac",
            fontVariantNumeric: "diagonal-fractions",
            fontWeight: "500",
        }

        
        const percentSymbol = {
            display: "flex",
            flexDirection: "row",
            justifyContent: !this.props.stretch ? "center": "flex-start",
            lineHeight:"21vw",
            fontFamily: "-apple-system",
            fontSize:  "9vw",
            paddingLeft: !this.props.stretch ? "0%" : "18%",
            fontFeatureSettings: "frac",
            fontVariantNumeric: "diagonal-fractions",
            fontWeight: "500",
        }

        const operationSymbol = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            lineHeight:"20vw",
            fontFamily: "-apple-system",
            fontSize:  "11vw",
            paddingLeft:"0%",
            fontWeight: "500",
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

        

        return (
            <div id="buttonContainer" style={this.props.portraitMode ? buttonPortraitStyle : buttonLandscapeStyle} onTouchStart={() => this.setState({currentColor: mapColors[this.props.color]})} onTouchEnd={() => this.setState({currentColor: this.props.color})}>
                <div id="nestedButton" style={this.props.plusMinus ? calcPortraitText2 : 
                                                this.props.percentSymbol ? percentSymbol :
                                                this.props.operationSymbol ? operationSymbol :
                                            calcPortraitText} onTouchStart={() => this.setState({currentColor: mapColors[this.props.color]})} onTouchEnd={() => this.setState({currentColor: this.props.color})}>
                    {this.props.symbol}                    
                </div>
                
            </div>
        );
    }

}

export default Button;