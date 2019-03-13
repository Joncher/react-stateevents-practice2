import React from "react";
import Favorites from "../Components/Favorites"
import BeyImages from "../beyImages"

class FavoritesContainer extends React.Component {
  getCards = () => {
    console.log(this.props.fav[0])
     console.log(BeyImages.map(card => {
       if(this.props.fav.includes(card))
       {
         return card
       }
    }))
  }
  makeCards = () => {
     console.log(this.state.cards.map(bey => <Favorites info={bey} handleClick={this.props.handler} />))
  }

  render(){
    return (
    <div className="index">

    {this.getCards()}
      <h1>Favorites</h1>
      {this.getCards()}
    </div>
    );
  }
}

export default FavoritesContainer;
