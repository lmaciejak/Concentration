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
      flippedOne: '', 
      flippedTwo: []
    };
  }

  handleClick = (e) => { 
    const { flippedOne } = this.state
    console.log('e.target', e.target)
    const image = e.target
    if(!flippedOne[0]){
      console.log('first if ran')
      e.target.style.backgroundColor = "transparent"
      this.setState({
        flippedOne: e.target.name
      })
    } else {
      e.target.style.backgroundColor = "transparent"
      if(e.target.name !== flippedOne){
        setTimeout(function(){ e.target.style.backgroundColor = "black"; }, 3000)
        console.log('this ran')
        this.setState({
          flippedOne: ''
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
    console.log('flipped one', this.state.flippedOne)
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