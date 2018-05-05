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
    const { flippedOneType } = this.state
    console.log('e.target', e.target)
    const image = e.target
    if(!flippedOneType[0]){
      console.log('first if ran')
      e.target.style.backgroundColor = "transparent"
      this.setState({
        flippedOneType: e.target.name, 
        flippedOneID: e.target.id
      })
    } else {
      const image = e.target
      console.log('flippedonetarget', this.state.flippedOneID)
      e.target.style.backgroundColor = "transparent"
      var elem = document.getElementById(`${this.state.flippedOneID}`)
      if(e.target.name !== flippedOneType){
        setTimeout(function () { image.style.backgroundColor = "black" 
        elem.style.backgroundColor = "black"; }, 2000)
        console.log('this ran')
      }else { 
        this.setState({
          flippedOneType: '',
          flippedOneID: '',
        })
      }
    }
    // if (image.style.backgroundColor === "transparent"){ 
    //   image.style.backgroundColor = "black"
    // } else { 
    //   image.style.backgroundColor = "transparent"
    //   setTimeout(function () { image.style.backgroundColor = "black"; }, 2000)
    // }
  }

  render() {
    console.log('flipped one', this.state.flippedOneType)
    console.log('flipped one id', this.state.flippedOneID)
    return (
      <div style={styles}>
        <h1>Concentration</h1>
        
        {(this.props.iconArr).map(value => (
          <img className="image" onClick={this.handleClick} id={value.id} name={value.type} src={`https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/${value.type}.png`}/>
        ))}
      </div>
    );
  }
}

export default Concentration; 