import React, { Component } from "react";
import Button from "./Button";
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      value: 500,
      portraitMode: true,
    }

    this.portraitModeValue = this.portraitModeValue.bind(this);
    this.portraitModeButtons = this.portraitModeButtons.bind(this);

    this.landscapeModeButtons = this.landscapeModeButtons.bind(this);

    this.checkIfiPhoneXorHigher = this.checkIfiPhoneXorHigher.bind(this);

    document.body.style = "background: black;"

    //change from orientationchange event to resize, safari supports resize event
    window.addEventListener("resize", () => {
      this.setState({portraitMode: window.matchMedia("(orientation: portrait)").matches});
      //this.setState({value: this.state.value - 1});  
      //this.setState({portraitMode: window.screen.height > window.screen.width});
    });
  }

  checkIfiPhoneXorHigher() {
    return window.screen.height >= 812;
  }



  portraitModeValue() {
    let valueView = [
      <div className="valuePortraitFlex">
        {this.state.value}
      </div>
    ];
    return valueView;
  }

  portraitModeButtons() {


    //let hold = {
      //fontSize: "20em",
      //color: "rgb(142, 142, 147)",
    //}

    let calcButtons = [
      <div className="calcButtons">
        <div className="buttonsRow">
          <Button color="rgb(142, 142, 147)" symbol="c" letterColor="black" clickColor="rgb(209, 209, 214)" specialSymbol={true}/>
          <Button color="rgb(142, 142, 147)" symbol={<div>&#43;/&#8722;</div>} letterColor="black" specialSymbol={true} plusMinus={true}/>
          <Button color="rgb(142, 142, 147)" symbol="%" letterColor="black" specialSymbol={true} percentSymbol={true}/>
          <Button color="#f1a33c" symbol={"\u00f7"} specialSymbol={true} operationSymbol={true}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="7"/>
          <Button color="rgb(44, 44, 46)" symbol="8"/>
          <Button color="rgb(44, 44, 46)" symbol="9"/>
          <Button color="#f1a33c" symbol={"\u00d7"} operationSymbol={true}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="4"/>
          <Button color="rgb(44, 44, 46)" symbol="5"/>
          <Button color="rgb(44, 44, 46)" symbol="6"/>
          <Button color="#f1a33c" symbol={"\u2212"} operationSymbol={true}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="1"/>
          <Button color="rgb(44, 44, 46)" symbol="2"/>
          <Button color="rgb(44, 44, 46)" symbol="3"/>
          <Button color="#f1a33c" symbol={"\u002B"} operationSymbol={true}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="0" stretch={true}/>
          <Button color="rgb(44, 44, 46)" symbol="."/>          
          <Button color="#f1a33c" symbol="=" operationSymbol={true}/>
        </div>
      </div>
    ];    
    return calcButtons;
  }

  landscapeModeValue() {
    let valueView = [
      <div className="valueLandscapeFlex">
        {this.state.value}        
      </div>
    ];
    return valueView;
  }

  landscapeModeButtons() {
    let calcButtons = [
      <div className="landscapeButtons">
        <div className="landscapeRow">
          <Button color="rgb(28, 28, 30)" symbol="(" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol=")" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="mc" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="m+" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="m-" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="mr" portraitMode={false}/>
          <Button color="rgb(142, 142, 147)" symbol="AC" portraitMode={false}/>
          <Button color="rgb(142, 142, 147)" symbol="+/-" portraitMode={false}/>
          <Button color="rgb(142, 142, 147)" symbol="%" portraitMode={false}/>
          <Button color="#FF9500" symbol={"\u00f7"} portraitMode={false}/>
        </div>
        <div className="landscapeRow">
          <Button color="rgb(28, 28, 30)" symbol={<div>2<sup>nd</sup></div>} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>x<sup>2</sup></div>} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>x<sup>3</sup></div>} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>x<sup>y</sup></div>} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>e<sup>x</sup></div>} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>10<sup>x</sup></div>} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol="7" portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol="8" portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol="9" portraitMode={false}/>
          <Button color="#FF9500" symbol={"\u00d7"} portraitMode={false}/>
        </div>
        <div className="landscapeRow">
          <Button color="rgb(28, 28, 30)" symbol="1/x" portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol={"\u221a" + "x"} portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol={"\u221b" + "x"} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={"x"} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="ln" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={<div>log<sub>10</sub></div>} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={4} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={5} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={6} portraitMode={false}/>
          <Button color="#FF9500" symbol={"\u2212"} portraitMode={false}/>
        </div>
        <div className="landscapeRow">
          <Button color="rgb(28, 28, 30)" symbol="x!" portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol="sin" portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol="cos" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="tan" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="e" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="EE" portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={1} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={2} portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={3} portraitMode={false}/>
          <Button color="#FF9500" symbol={"+"} portraitMode={false}/>
        </div>
        <div className="landscapeRow">
          <Button color="rgb(28, 28, 30)" symbol="Rad" portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol="sinh" portraitMode={false}/>                    
          <Button color="rgb(28, 28, 30)" symbol="cosh" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="tanh" portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol={"\u03c0"} portraitMode={false}/>
          <Button color="rgb(28, 28, 30)" symbol="Rand" portraitMode={false}/>
          <Button color="rgb(44, 44, 46)" symbol={0} portraitMode={false} stretch={true}/>
          <Button color="rgb(44, 44, 46)" symbol="." portraitMode={false}/>
          <Button color="#FF9500" symbol="=" portraitMode={false}/>
        </div>
      </div>
    ];
    return calcButtons;
  }

  render() {    

    //padding at bottom different depending on phone screen size
    if (this.checkIfiPhoneXorHigher()) {
      document.getElementsByTagName("BODY")[0].style.bottom = "8%";
    }

    if (this.state.portraitMode) {
      return (
        <div className="calculon">
          <div className="topSpacer"></div>
          {this.portraitModeValue()}
          <div className="calculonFlex">     
            {this.portraitModeButtons()}              
          </div>              
        </div>      
      );
    } else {
      return (
        <div className="calculon">
          {this.landscapeModeValue()}
          {this.landscapeModeButtons()}
        </div>        
      );
    }
  }
}

export default App;

