import React, { Component } from 'react';
import '../Keyboard/Keyboard.css';
import Key from '../Key/Key';
import Harmonic from '../Systems/Harmonic';
// import './index.css';

export default class Keyboard extends Component {

  // TODO: Function to pass in right notes depending on system passed in
  constructor(props) {
    super(props);

    this.audioContext = this._returnAudioContext.bind(this);
    this.harmonic = this._returnHarmonic.bind(this);

    this.state = {
      system: 'Harmonic',
    }

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _returnAudioContext() {
    return new (window.AudioContext || window.webkitAudioContext)();
  }

  _returnHarmonic() {
    return new Harmonic(this.audioContext);
  }

  // TODO: Figure this out (ie: this.harmonic === undefined)
  _handleKeyDown(evt) {
    const KEY1 = 49;
    const KEY2 = 50;
    const KEY3 = 51;
    const KEY4 = 52;
    const KEY5 = 53;
    const KEY6 = 54;
    const KEY7 = 55;

    if (evt.keyCode === KEY1) {
      console.log('ac');
    } else if (evt.keyCode === KEY2) {
      console.log(evt.keyCode);

    } else if (evt.keyCode === KEY3) {
      console.log(evt.keyCode);

    } else if (evt.keyCode === KEY4) {
      console.log(evt.keyCode);

    } else if (evt.keyCode === KEY5) {
      console.log(evt.keyCode);

    } else if (evt.keyCode === KEY6) {
      console.log(evt.keyCode);

    } else if (evt.keyCode === KEY7) {
      console.log(evt.keyCode);

    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  getKeys() {
      let keyArray = [];

      for (let i = 1; i < 8; i++) {
        keyArray.push(<Key note={'C'} num={i} key={i}/>);
      }

      return keyArray;
  }

  render() {
    const keyArray = this.getKeys();

    return <div className='Keyboard'>{ keyArray }</div>;
  }
}
