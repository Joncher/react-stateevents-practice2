import React, { Component } from "react";

class BeyCard extends React.Component {

  state = {
    clicked: false
  }


  render() {
    return (
      <div>
        {this.state.clicked

          ? null
          : <div><h3>{this.props.info.name}</h3>
        <img onClick={(e) => this.props.handleClick(this.props)} src={this.props.info.img} />
      </div>
      }
    </div>
    )
  }
}

export default BeyCard;
