import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Concentration from './components/Concentration';

class App extends Component {

  imagesArr = [{id: 1, type: 'apple'}, {id: 2, type: 'camera'}, {id: 3, type:'clover'}, {id: 4, type:'coffee'}, {id: 5, type:'heart'}, {id: 6, type:'key'}, {id: 7, type:'paw'}, {id: 8, type:'smiley'}, 
  {id: 9, type:'snowflake'}, {id: 10, type:'star'}, {id: 11, type:'apple'}, {id: 12, type:'camera'}, {id: 13, type:'clover'}, {id: 14, type:'coffee'}, {id: 15, type:'heart'}, {id: 16, type:'key'}, 
  {id: 17, type:'paw'}, {id: 18, type:'smiley'}, {id: 19, type:'snowflake'}, {id: 20, type:'star'}]

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } return array
  }

  newArr = this.shuffleArray(this.imagesArr)

  render() {
    return (
      <div className="App">
        <Concentration iconArr={this.newArr}/>
      </div>
    );
  }
}

export default App;
