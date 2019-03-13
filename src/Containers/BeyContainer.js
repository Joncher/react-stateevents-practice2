import React from "react";
import BeyCard from "../Components/BeyCard"
import BeyImages from "../beyImages"


class BeyContainer extends React.Component {
  state = {
    arrayBeys: BeyImages
  };

  makeCards = () => {
     return this.state.arrayBeys.map(bey => <BeyCard info={bey} handleClick={this.props.handler} />)
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
