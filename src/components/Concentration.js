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
    };
    this.imagesArr = ['apple', 'camera', 'clover', 'coffee', 'heart', 'key', 'paw', 'smiley', 
    'snowflake', 'star', 'apple', 'camera', 'clover', 'coffee', 'heart', 'key', 
    'paw', 'smiley', 'snowflake', 'star']
  }
                    
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } return array
  }

  handleClick = (e) => { 
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
          <img className="image" onClick={this.handleClick} name={value} src={`https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/${value}.png`}/>
        ))}
      </div>
    );
  }
}

export default Concentration; 