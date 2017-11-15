import React, { Component } from 'react';
import './App.css';
import Sound from './Sounds/Sounds.js';
import Keyboard from './Keyboard/Keyboard.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bpm: 120,
      system: 'Harmonic'
    }
  }

  playSound() {
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let note = new Sound(audioContext);
    let now = audioContext.currentTime;

    // TODO: Uncomment
    // note.play(500, now, now + 15, 0.1);
    // note.play(80, now, now + 20, 0.7);
  }

  render() {
    this.playSound();

    return (
      <div className="App">
        <div className="system-bpm-container">
          <div className="div-bpm">
            <h1 className="h1-bpm">
              {this.state.bpm}
            </h1>
          </div>
          <div className="div-system">
            <h1 className="h1-system">
              {this.state.system}
            </h1>
          </div>
        </div>
        <div className="App-Keyboard">
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
