import React, { Component } from 'react'
import '../styles/Board.css'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
      <h2>Guess the word.</h2>
      <Alphabet onPlay={this.props.onPlay}/>
      </div>
    )
  }
}
class Alphabet extends Component {
  render () {
    return (
      <div className="character-class">
      <Letter character="A" onPlay={this.props.onPlay}/>
      <Letter character="B" onPlay={this.props.onPLay}/>
      <Letter character="C" onPlay={this.props.onPlay}/>
      <Letter character="D" onPlay={this.props.onPlay}/>
      <Letter character="E" onPlay={this.props.onPlay}/>
      <Letter character="F" onPlay={this.props.onPlay}/>
      <Letter character="G" onPlay={this.props.onPlay}/>
      <Letter character="H" onPlay={this.props.onPlay}/>
      <Letter character="I" onPlay={this.props.onPlay}/>
      <Letter character="J" onPlay={this.props.onPlay}/>
      <Letter character="K" onPlay={this.props.onPlay}/>
      <Letter character="L" onPlay={this.props.onPlay}/>
      <Letter character="M" onPlay={this.props.onPlay}/>
      <Letter character="N" onPlay={this.props.onPlay}/>
      <Letter character="O" onPlay={this.props.onPlay}/>
      <Letter character="P" onPlay={this.props.onPlay}/>
      <Letter character="Q" onPlay={this.props.onPlay}/>
      <Letter character="R" onPlay={this.props.onPlay}/>
      <Letter character="S" onPlay={this.props.onPlay}/>
      <Letter character="T" onPlay={this.props.onPlay}/>
      <Letter character="U" onPlay={this.props.onPlay}/>
      <Letter character="V" onPlay={this.props.onPlay}/>
      <Letter character="W" onPlay={this.props.onPlay}/>
      <Letter character="X" onPlay={this.props.onPlay}/>
      <Letter character="Y" onPlay={this.props.onPlay}/>
      <Letter character="Z" onPlay={this.props.onPlay}/>
      </div>
    )
  }
}

class Letter extends Component {
  handleClick = () => {
    this.props.onPlay(this.props.character)
  }
  render () {
    return <button onClick={this.handleClick}>{this.props.character}</button>;
  }
}
export default Board
