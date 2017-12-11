import React, { Component } from 'react';
import '../Keyboard/Keyboard.css';
import Key from '../Key/Key';
import Harmonic from '../Systems/Harmonic';
import Pythag from '../Systems/Pythag';
import Et from '../Systems/Et';
import Ptolemy from '../Systems/Ptolemy';
import MeanTone from '../Systems/MeanTone';
import Guide from '../Guide/Guide.js';

export default class Keyboard extends Component {

  constructor(props) {
    super(props);

    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

    this.harmonic = new Harmonic(this.audioContext);
    this.pythag = new Pythag(this.audioContext);
    this.et = new Et(this.audioContext);
    this.ptolemy = new Ptolemy(this.audioContext);
    this.meanTone = new MeanTone(this.audioContext);

    this.state = {
      system: props.system,
    }

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._animateKey = this._animateKey.bind(this);
  }

  componentWillUpdate(props, state) {
    if (props.system !== this.state.system) {
      this.setState((prevState, props) => ({
        system: props.system
      }));
    }
  }

  _animateKey(id) {
    const WHITE = '#ffffff';
    const BLACK = '#000000';

    let key = document.getElementById(id);

    key.style.color = WHITE;
    key.style.background = BLACK;

    setTimeout(() => {
      key.style.color = BLACK;
      key.style.background = WHITE;
    }, 1000);
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
      this._animateKey('C-1');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key1();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key1();
      } else if (this.state.system === 'ET') {
        this.et.key1();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key1();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key1();
      }
    } else if (evt.keyCode === KEY2) {
      this._animateKey('D-2');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key2();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key2();
      } else if (this.state.system === 'ET') {
        this.et.key2();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key2();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key2();
      }
    } else if (evt.keyCode === KEY3) {
      this._animateKey('E-3');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key3();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key3();
      } else if (this.state.system === 'ET') {
        this.et.key3();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key3();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key3();
      }
    } else if (evt.keyCode === KEY4) {
      this._animateKey('F-4');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key4();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key4();
      } else if (this.state.system === 'ET') {
        this.et.key4();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key4();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key4();
      }
    } else if (evt.keyCode === KEY5) {
      this._animateKey('G-5');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key5();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key5();
      } else if (this.state.system === 'ET') {
        this.et.key5();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key5();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key5();
      }
    } else if (evt.keyCode === KEY6) {
      this._animateKey('A-6');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key6();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key6();
      } else if (this.state.system === 'ET') {
        this.et.key6();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key6();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key6();
      }
    } else if (evt.keyCode === KEY7) {
      this._animateKey('B-7');

      if (this.state.system === 'Harmonic') {
        this.harmonic.key7();
      } else if (this.state.system === 'Pythag') {
        this.pythag.key7();
      } else if (this.state.system === 'ET') {
        this.et.key7();
      } else if (this.state.system === 'Ptolemy') {
        this.ptolemy.key7();
      } else if (this.state.system === 'Mean Tone') {
        this.meanTone.key7();
      }
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown);
  }

  _keyboardText() {
    return 'Use the number 1, 2, 3, 4, 5, 6, or 7 on your keyboard to play a tune.';
  }

  getKeys() {
      const ASCII = 66;
      let keyArray = [];

      for (let i = 1; i < 6; i++) {
        let note = String.fromCharCode(ASCII + i);

        keyArray.push(<Key id={note.concat('-').concat(i)} note={note} num={i} key={i} />);
      }
      // Notes A and B
      keyArray.push(<Key note={'A'} num={6} key={6} />);
      keyArray.push(<Key note={'B'} num={7} key={7} />);

      return keyArray;
  }

  render() {
    const keyArray = this.getKeys();

    return (
      <div>
        <Guide guideText={this._keyboardText()} guideId='guide-keyboard' />
        <div className='Keyboard'>
          { keyArray }
        </div>
        {/*<div>
          'Use the number 1, 2, 3, 4, 5, 6, or 7 on your keyboard to play a tune.'
        </div>*/}
      </div>
    );
  }
}
