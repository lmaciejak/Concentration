import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class Concentration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flippedOneType: '', 
      flippedOneID: '',
      flippedTwoType: '', 
      flippedTwoID: '', 
      coffee: false,
      camera: false,
      clover: false,
      key: false,
      heart: false,
      apple: false,
      paw: false,
      star: false,
      smiley: false,
      snowflake: false,
      gameWon: 0,
      wrong: false,
      firstFlip: "",
      prevInd: 0,
      deck: "", 
      1: '', 
      2: '', 
      3: '', 
      4: '', 
      5: '', 
      6: '', 
      7: '', 
      8: '', 
      9: '', 
      10: '', 
      11: '', 
      12: '', 
      13: '', 
      14: '', 
      15: '', 
      16: '', 
      17: '', 
      18: '', 
      19: '', 
      20: '', 
    };
  }

  handleClick = (e) => { 
    const { flippedOneType, flippedOneID, flippedTwoID, flippedTwoType } = this.state
    console.log('e.target', e.target)
    const image = e.target
    const imageID = image.id
    if(flippedOneID && flippedTwoID){
console.log('first ran')
    }
    else if(!flippedOneID){
      console.log('flippedONe is undefined')
      this.setState({
        [imageID]: 'flipped', 
        flippedOneID: imageID, 
        flippedOneType: image.name
      })
    } else if(!flippedTwoID){
      console.log('flipped two undefined')
      this.setState({
        [imageID]: 'flipped', 
        flippedTwoID: imageID, 
        flippedTwoType: image.name
      }, () => { 
        if(this.state.flippedTwoType === this.state.flippedOneType) { 
          console.log('equal ran')
        }else { 
  console.log('images not equal')
  setTimeout(function(){         
    this.setState({
    [imageID]: '', 
    flippedOneID: '', 
    flippedOneType: '', 
    [flippedOneID]: '', 
    flippedTwoID: '', 
    flippedTwoType: '', 
    [flippedTwoID]: ''
  })}.bind(this), 2000);
        }
      })
    }
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div style={styles}>
        <h1>Concentration</h1>
        
        {(this.props.iconArr).map(value => (
          (this.state[value.id] !== 'flipped') ? <img className="flipped" onClick={this.handleClick} id={value.id} name={value.type} width='82px' height='82px' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Black_card.svg/788px-Black_card.svg.png`}/>
          : <img className="image" onClick={this.handleClick} id={value.id} name={value.type} src={`https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/${value.type}.png`}/>
        ))}
      </div>
    );
  }
}

export default Concentration; 