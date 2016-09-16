import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Word from './Word'
import Board from './Board';

class App extends Component {
  constructor () {
    super()
    this.state = {
      solution: 'HANGMAN',
      used: [
      ]
    }
  }
  onPlay = (character) => {
    this.state.used.push(character)
    this.setState({
      used: this.state.used
    })
  }
  render() {
    return (
      <div className="App">
      <img src={'./src/fig7-8.gif'}/>
      <h1>Count: </h1>
      <Word solution={this.state.solution} used={this.state.used} />
        <Board onPlay={this.onPlay}/>
      </div>
    );
  }
}

export default App;
