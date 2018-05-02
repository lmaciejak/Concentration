import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class Concentration extends React.Component {
  constructor() {
    super();
    this.state = {
      flippedOne: [], 
      flippedTwo: []
    };
    this.imagesArr = [{id: 1, type: 'apple'}, {id: 2, type: 'camera'}, {id: 3, type:'clover'}, {id: 4, type:'coffee'}, {id: 5, type:'heart'}, {id: 6, type:'key'}, {id: 7, type:'paw'}, {id: 8, type:'smiley'}, 
    {id: 9, type:'snowflake'}, {id: 10, type:'star'}, {id: 11, type:'apple'}, {id: 12, type:'camera'}, {id: 13, type:'clover'}, {id: 14, type:'coffee'}, {id: 15, type:'heart'}, {id: 16, type:'key'}, 
    {id: 17, type:'paw'}, {id: 18, type:'smiley'}, {id: 19, type:'snowflake'}, {id: 20, type:'star'}]
  }
                    
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } return array
  }

  handleClick = (e) => { 
    console.log('e.target', e.target)
    const image = e.target
    if (image.style.backgroundColor === "transparent"){ 
      image.style.backgroundColor = "black"
    } else { 
      image.style.backgroundColor = "transparent"
      setTimeout(function () { image.style.backgroundColor = "black"; }, 2000)
    }
  }

  render() {
    return (
      <div style={styles}>
        <h1>Concentration</h1>
        
        {this.shuffleArray(this.imagesArr).map(value => (
          <img className="image" onClick={this.handleClick} id={value.id} name={value.type} src={`https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/${value.type}.png`}/>
        ))}
      </div>
    );
  }
}

export default Concentration; 