import React, { Component } from "react";
import ButtonLevel from "../../components/ButtonLevel";
import Auth from "./Auth";

class Level extends Component {
  render() {
    window.addEventListener("load", () => this.props.updateClickedBtn(1));
    const isAuthenticated = localStorage.getItem("namePlayer") ? true : false;

    return (
      <div className="level-page">
        {isAuthenticated && this.props.clickedBtn ? (
          <span>
            <ButtonLevel />
            <div className="line"></div>
            <Auth
              updateNamePlayer={this.props.updateNamePlayer}
              updateClickedBtn={this.props.updateClickedBtn}
              namePlayer={this.props.namePlayer}
            />
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Level;
