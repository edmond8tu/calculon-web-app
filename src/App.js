import React, { Component } from "react";
import Button from "./Button";
import './App.css';

class App extends Component {



  constructor() {
    super();

    this.calcSymbols = [
      "c",
      "+/-",
      "%",
      "/",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
      "hold",
    ];

    this.createButtons = this.createButtons.bind(this);

    document.body.style = "background: black;"
  }


  createButtons() {
    let calcGrid = [];
    
    for (let i = 0; i < 20; i++) {
      let cell = [
        <div className="calcCell">
          <Button color="gray" symbol={this.calcSymbols[i]}/>
        </div>
      ];
      calcGrid.push(cell);
    }
    
    return calcGrid;
  }

  render() {    
    return (
      <div className="calculon">
        <div className="calculonGrid">
          {this.createButtons()}      
        </div>
      
      </div>
      
    );
  }
}

export default App;

