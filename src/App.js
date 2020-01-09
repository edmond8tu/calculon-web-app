import React, { Component } from "react";
import Button from "./Button";
import './App.css';

class App extends Component {



  constructor() {
    super();

    this.state = {value: 500}

    this.createValue = this.createValue.bind(this);
    this.createButtons = this.createButtons.bind(this);

    this.testCheckOrientation = this.testCheckOrientation.bind(this);

    document.body.style = "background: black;"

    window.addEventListener("orientationchange", this.testCheckOrientation);
  }

  testCheckOrientation() {
    this.setState({value: "HAHAHAHAH"});
  }

  createValue() {
    let valueView = [
      <div className="valueFlex">
        {this.state.value}        
      </div>
    ];
    return valueView;
  }

  createButtons() {
    let calcButtons = [
      <div className="calcButtons">
        <div className="buttonsRow">
          <Button color="rgb(142, 142, 147)" symbol="c" letterColor="black"/>
          <Button color="rgb(142, 142, 147)" symbol={"+/-"} letterColor="black"/>
          <Button color="rgb(142, 142, 147)" symbol="%" letterColor="black"/>
          <Button color="#FF9500" symbol={"\u00f7"}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="7"/>
          <Button color="rgb(44, 44, 46)" symbol="8"/>
          <Button color="rgb(44, 44, 46)" symbol="9"/>
          <Button color="#FF9500" symbol={"\u00d7"}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="4"/>
          <Button color="rgb(44, 44, 46)" symbol="5"/>
          <Button color="rgb(44, 44, 46)" symbol="6"/>
          <Button color="#FF9500" symbol={"\u2212"}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="1"/>
          <Button color="rgb(44, 44, 46)" symbol="2"/>
          <Button color="rgb(44, 44, 46)" symbol="3"/>
          <Button color="#FF9500" symbol={"+"}/>
        </div>
        <div className="buttonsRow">
          <Button color="rgb(44, 44, 46)" symbol="0" stretch={true}/>
          <Button color="rgb(44, 44, 46)" symbol="."/>          
          <Button color="#FF9500" symbol="="/>
        </div>
      </div>
    ];
    
    return calcButtons;
  }

  render() {    
    return (
      <div className="calculon">
        <div className="topSpacer"></div>
        {this.createValue()}
        <div className="calculonGridFlex">
          <div className="calculonGrid">
            {this.createButtons()}      
          </div>
        </div>
        
      
      </div>
      
    );
  }
}

export default App;

