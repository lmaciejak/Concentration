import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Concentration from './components/Concentration';

class App extends Component {

  imagesArr = [{id: 1, type: 'apple'}, {id: 2, type:'apple'}, {id: 3, type: 'camera'}, {id: 4, type:'camera'}, 
  {id: 5, type:'clover'}, {id: 6, type:'clover'}, {id: 7, type:'coffee'},{id: 8, type:'coffee'}, 
  {id: 9, type:'heart'}, {id: 10, type:'heart'}, {id: 11, type:'key'}, {id: 12, type:'key'}, 
  {id: 13, type:'paw'},   {id: 14, type:'paw'},{id: 15, type:'smiley'},  {id: 16, type:'smiley'},
  {id: 17, type:'snowflake'},  {id: 18, type:'snowflake'},{id: 19, type:'star'},{id: 20, type:'star'}]

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
