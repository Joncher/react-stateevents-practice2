import React from "react";
import BeyCard from "../Components/BeyCard"

class BeyContainer extends React.Component {
  state = {
    arrayBeys: []
  };

  componentDidMount(){
    fetch('http://localhost:3001/beys')
    .then(resp => resp.json())
    .then(data => this.setState({arrayBeys: data}))
  }

  makeCards = () => {
     return this.state.arrayBeys.map(bey => <BeyCard info={bey}/>)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.state.arrayBeys.length > 0 ? this.makeCards(): <h3> Loading</h3>}
      </div>
    );
  }
}

export default BeyContainer;
