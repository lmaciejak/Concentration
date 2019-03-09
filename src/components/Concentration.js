import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Concentration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flippedOneType: "",
      flippedOneID: "",
      flippedTwoType: "",
      flippedTwoID: "",
      gameWon: 0,
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: ""
    };
  }

  handleClick = e => {
    const {
      flippedOneType,
      flippedOneID,
      flippedTwoID,
      flippedTwoType
    } = this.state;
    console.log("e.target", e.target);
    const image = e.target;
    const imageID = image.id;
    if (flippedOneID && flippedTwoID) {
      console.log("first ran");
    } else if (!flippedOneID) {
      console.log("flippedONe is undefined");
      this.setState({
        [imageID]: "flipped",
        flippedOneID: imageID,
        flippedOneType: image.name
      });
    } else if (!flippedTwoID) {
      console.log("flipped two undefined");
      this.setState(
        {
          [imageID]: "flipped",
          flippedTwoID: imageID,
          flippedTwoType: image.name
        },
        () => {
          if (this.state.flippedTwoType === this.state.flippedOneType) {
            this.setState({
              flippedOneID: "",
              flippedOneType: "",
              flippedTwoID: "",
              flippedTwoType: ""
            });
          } else {
            console.log("images not equal");
            setTimeout(
              function() {
                this.setState({
                  [imageID]: "",
                  flippedOneID: "",
                  flippedOneType: "",
                  [flippedOneID]: "",
                  flippedTwoID: "",
                  flippedTwoType: "",
                  [flippedTwoID]: ""
                });
              }.bind(this),
              500
            );
          }
        }
      );
    }
  };

  render() {
    let count = 0
    for(var key in this.state){
      if(key > 0 || key < 21){
        if(this.state[key] === 'flipped'){ 
          count += 1
        }
      }
    }
    return (
      <div style={styles}>
        <h1>Concentration</h1>
        {count === 20 ? <h4> You won! </h4> : ''}

        {this.props.iconArr.map(
          value =>
            this.state[value.id] !== "flipped" ? (
              <img
                className="flipped"
                onClick={this.handleClick}
                id={value.id}
                name={value.type}
                width="82px"
                height="82px"
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9spedII5oOZSYIEh7D39ONoE_xrPmpmPgTeYPNQbkEVQKXEb`}
              />
            ) : (
              <img
                className="image"
                onClick={this.handleClick}
                id={value.id}
                name={value.type}
                src={`https://raw.githubusercontent.com/joinpursuit/AC_4_Web/master/units/react/old/exercises/objects_and_arrays/cards/${
                  value.type
                }.png`}
              />
            )
        )}
      </div>
    );
  }
}

export default Concentration;
