import React, { Component } from 'react';
import '../Keyboard/Keyboard.css';
import Key from '../Key/Key';
import Harmonic from '../Systems/Harmonic';
import Pythag from '../Systems/Pythag';
import Et from '../Systems/Et';


export default class Keyboard extends Component {

  // TODO: Function to pass in right notes depending on system passed in
  constructor(props) {
    super(props);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.harmonic = new Harmonic(this.audioContext);
    this.pythag = new Pythag(this.audioContext);
    this.et = new Et(this.audioContext);

    this.state = {
      system: props.system,
    }

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Keyboard this state ' + this.state.system);
  }

  componentWillUpdate(props, state) {
    if (props.system !== this.state.system) {
      this.setState((prevState, props) => ({
        system: props.system
      }));
    }
  }


  _handleKeyDown(evt) {
    const KEY1 = 49;
    const KEY2 = 50;
    const KEY3 = 51;
    const KEY4 = 52;
    const KEY5 = 53;
    const KEY6 = 54;
    const KEY7 = 55;

    // console.log(this.state);

    if (evt.keyCode === KEY1) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key1();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key1();
      } else if (this.state.system === 'ET') {

      }
      // this.harmonic.animateKey1();
    } else if (evt.keyCode === KEY2) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key2();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key2();
      } else if (this.state.system === 'ET') {

      }
    } else if (evt.keyCode === KEY3) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key3();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key3();
      } else if (this.state.system === 'ET') {

      }
    } else if (evt.keyCode === KEY4) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key4();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key4();
      } else if (this.state.system === 'ET') {

      }
    } else if (evt.keyCode === KEY5) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key5();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key5();
      } else if (this.state.system === 'ET') {

      }
    } else if (evt.keyCode === KEY6) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key6();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key6();
      } else if (this.state.system === 'ET') {

      }
    } else if (evt.keyCode === KEY7) {
      if (this.state.system === 'Harmonic') {
        this.harmonic.key7();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key7();
      } else if (this.state.system === 'ET') {

      }
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  getKeys() {
      const ASCII = 66;
      let keyArray = [];

      for (let i = 1; i < 6; i++) {
        let note = String.fromCharCode(ASCII + i);

        keyArray.push(<Key note={note} num={i} key={i} />);
      }
      // Notes A and B
      keyArray.push(<Key note={'A'} num={6} key={6} />);
      keyArray.push(<Key note={'B'} num={7} key={7} />);

      return keyArray;
  }

  render() {
    const keyArray = this.getKeys();

    return <div className='Keyboard'>{ keyArray }</div>;
  }
}
