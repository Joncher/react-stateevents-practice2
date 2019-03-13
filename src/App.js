import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import FavoritesContainer from './Containers/FavoritesContainer'

class App extends Component {
  state =
  {
    cards: []
  }
  handleClick = (e) => {
    this.setState({
      cards: this.state.cards.concat(e)
    })
  }
  render() {
    return (
      <div>
        <BeyContainer handler={this.handleClick}/>
        <FavoritesContainer fav={this.state.cards}/>
      </div>
    );
  }
}

export default App;
