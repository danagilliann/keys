import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './App.css';
import Keyboard from './Keyboard/Keyboard.js';
import Sound from './Sounds/Sounds.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    this.state = {
      bpm: 120,
      system: 'Harmonic'
    }

    this._setSystem = this._setSystem.bind(this);
    this.rhythm = this.rhythm.bind(this);
    this.sleep = this.sleep.bind(this)
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async rhythm() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    // while (true) {
      console.log('hello');
      note.beat(120, now, 0.3, this.state.bpm);
      // await this.sleep(1000);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App state.system ' + this.state.system);
  }

  _setSystem(option) {
    this.setState((prevState, props) => ({
      system: option.label
    }));
  }

  render() {
    const options = ['Harmonic', 'Pythag', 'ET'];
    const defaultOption = options[0];

    this.rhythm();

    return (
      <div className='App'>
        <div className='system-bpm-container'>
          <div className='div-bpm'>
            <h1 className='h1-bpm'>
              {this.state.bpm}
            </h1>
          </div>
          <div className='div-system'>
              <Dropdown options={options} onChange={this._setSystem} value={defaultOption} placeholder='Harmonic' />
          </div>
        </div>
        <div className='App-Keyboard'>
          <Keyboard system={ this.state.system }/>
        </div>
      </div>
    );
  }
}

export default App;
