import React, { Component } from "react";
import Begin from './pages/js/Begin'
import Level from './pages/js/Level'
import {
  BrowserRouter
} from "react-router-dom";
import './pages/css/style.css'
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clickedBtn: 0,
      namePlayer: ''
    }
    this.updateClickedBtn = this.updateClickedBtn.bind(this)
    this.updateNamePlayer = this.updateNamePlayer.bind(this)
  }

  updateClickedBtn(value) {
    this.setState({
      clickedBtn: value
    })
  }

  updateNamePlayer(newName) {
    this.setState({
      namePlayer: newName
    })
  }

  render() {
    return (
      <div id="app">
          {
            this.state.clickedBtn && this.state.namePlayer ? '' :
            <Begin 
            namePlayer={this.state.namePlayer}
            updateClickedBtn={this.updateClickedBtn} 
            updateNamePlayer={this.updateNamePlayer} 
            clickedBtn={this.state.clickedBtn}
            />
          }
          <BrowserRouter>
            <Routes />
            <Level 
              updateNamePlayer={this.updateNamePlayer}
              updateClickedBtn={this.updateClickedBtn}
              clickedBtn={this.state.clickedBtn}
              namePlayer={this.state.namePlayer}
            />
          </BrowserRouter>
        </div>
    )
  }
} 

export default App;
