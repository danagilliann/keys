import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './App.css';
import Keyboard from './Keyboard/Keyboard.js';
import Sound from './Sounds/Sounds.js';
import Dilla from 'dilla';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      proxy_bpm: 120,
      bpm: 120,
      system: 'Harmonic',
      proxy_meter: 4,
      meter: 4,
    }

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.dilla = new Dilla(this.audioContext, { 'tempo': this.state.bpm });

    this._setSystem = this._setSystem.bind(this);
    this._dillaSetup = this._dillaSetup.bind(this);

    this._startRhythm = this._startRhythm.bind(this);
    this._stopRhythm = this._stopRhythm.bind(this);

    this._setBpm = this._setBpm.bind(this);
    this._changeBpm = this._changeBpm.bind(this);

    this._setMeter = this._setMeter.bind(this);
    this._changeMeter = this._changeMeter.bind(this);
  }

  componentDidMount() {
    this._dillaSetup();
    this._startRhythm();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUpdate(props, state) {
  }

  _setSystem(option) {
    this.setState((prevState, props) => ({
      system: option.label
    }));
  }

  _stopRhythm() {
    this.dilla.stop();
  }

  _startRhythm() {
    this.dilla.start();
  }

  _dillaSetup() {
    var high = {
      'position': '*.1.01',
      'freq': 440,
      'duration': 15
    };
    let low = { 'freq': 330, 'duration': 15 };

    this.dilla.set('metronome', [
      high,
      ['*.>1.01', low]
    ]);

    let oscillator, gainNode;
    this.dilla.on('step', function (step) {
      if (step.event === 'start') {
        oscillator = step.context.createOscillator();
        gainNode = step.context.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(step.context.destination);
        oscillator.frequency.value = step.args.freq;
        gainNode.gain.setValueAtTime(1, step.time);
        oscillator.start(step.time);
      }
      else if (step.event === 'stop' && oscillator) {
        gainNode.gain.setValueAtTime(1, step.time);
        gainNode.gain.linearRampToValueAtTime(0, step.time + 0.1);
        oscillator.stop(step.time + 0.1);
        oscillator = null;
        gainNode = null;
      }
    });
  }

  _setBpm(evt) {
    this.setState({proxy_bpm: evt.target.value});
  }

  _changeBpm(evt) {
    evt.preventDefault();

    this.setState({proxy_bpm: parseInt(this.state.proxy_bpm, 10)})
    this.setState({bpm: this.state.proxy_bpm});

    this.dilla.setTempo(parseInt(this.state.proxy_bpm, 10));
  }

  _setMeter(evt) {
    this.setState({proxy_meter: evt.target.value});
  }

  _changeMeter(evt) {
    evt.preventDefault();

    this.setState({proxy_meter: parseInt(this.state.proxy_meter, 10)})
    this.setState({meter: this.state.proxy_meter});

    this.dilla.setBeatsPerBar(parseInt(this.state.proxy_meter, 10));

    console.log(this.dilla);
  }

  render() {
    const options = ['Harmonic', 'Pythag', 'ET', 'Ptolemy', 'Mean Tone'];
    const defaultOption = options[0];

    return (
      <div className='App'>
        <div className='system-bpm-container'>
          <div className='div-bpm'>
            <input type='text' value={this.state.proxy_bpm} onChange={this._setBpm} className='bpm' />
            <button className='bpm-changer' onClick={this._changeBpm}>
              Change bpm
            </button>
          </div>
          {/* <div className='div-meter'>
            <input type='text' value={this.state.proxy_meter} onChange={this._setMeter} className='meter' />
            <button className='meeter-changer' onClick={this._changeMeter}>
              Change meter
            </button>
          </div>*/}
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
