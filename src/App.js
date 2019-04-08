import React, { Component} from "react";
import {hot} from "react-hot-loader"
import "./App.css";
import Uno from "./components/UNO.js"

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list : ["Egon Schiele", "Vicent Van G", "Salvador Dali", "Rembrandt"] 
      boolean: true,
      str : "hello"
    }
  }
  render(){
    return(
      <div className="App">
        <h1> Hello, Worldiñi </h1>
        <Uno />
      </div>
    );
  }
}
export default hot(module)(App);
