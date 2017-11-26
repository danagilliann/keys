import React, { Component } from 'react';
import '../Keyboard/Keyboard.css';
import Key from '../Key/Key';
import Harmonic from '../Systems/Harmonic';
// import './index.css';

export default class Keyboard extends Component {

  // TODO: Function to pass in right notes depending on system passed in
  constructor(props) {
    super(props);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.harmonic = new Harmonic(this.audioContext);

    this.state = {
      system: 'Harmonic',
    }

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _handleKeyDown(evt) {
    const KEY1 = 49;
    const KEY2 = 50;
    const KEY3 = 51;
    const KEY4 = 52;
    const KEY5 = 53;
    const KEY6 = 54;
    const KEY7 = 55;

    if (evt.keyCode === KEY1) {
      this.harmonic.key1();
    } else if (evt.keyCode === KEY2) {
      this.harmonic.key2();
    } else if (evt.keyCode === KEY3) {
      this.harmonic.key3();
    } else if (evt.keyCode === KEY4) {
      this.harmonic.key4();
    } else if (evt.keyCode === KEY5) {
      this.harmonic.key5();
    } else if (evt.keyCode === KEY6) {
      this.harmonic.key6();
    } else if (evt.keyCode === KEY7) {
      this.harmonic.key7();
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  getKeys() {
      const ASCII = 66;
      let keyArray = [];

      for (let i = 1; i < 6; i++) {
        keyArray.push(<Key note={String.fromCharCode(ASCII + i)} num={i} key={i}/>);
      }
      // Notes A and B
      keyArray.push(<Key note={'A'} num={6} key={6}/>)
      keyArray.push(<Key note={'B'} num={7} key={7}/>)

      return keyArray;
  }

  render() {
    const keyArray = this.getKeys();

    return <div className='Keyboard'>{ keyArray }</div>;
  }
}
