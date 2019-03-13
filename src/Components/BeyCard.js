import React, { Component } from "react";

class BeyCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState({clicked: true})
  }


  render() {
    return (
      <div>
        {this.state.clicked

          ? null
          : <div><h3>{this.props.info.name}</h3>
        <img onClick={this.handleClick} src={this.props.info.img}/>
      </div>
      }
    </div>
    )
  }
}

export default BeyCard;
