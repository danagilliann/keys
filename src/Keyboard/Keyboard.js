import React, { Component } from 'react';
import '../Keyboard/Keyboard.css';
import Key from '../Key/Key';
// import './index.css';

export default class Keyboard extends Component {

  // TODO: Function to pass in right notes depending on system passed in
  constructor(props) {
    super(props);

    this.state = {
      system: 'Harmonic'
    }
  }

  getKeys() {
      let keyArray = [];

      for (let i = 1; i < 14; i++) {
        keyArray.push(<Key note={'C'} num={1} />);
      }

      return keyArray;
  }

  render() {
    const keyArray = this.getKeys();

    return <div className='Keyboard'>{ keyArray }</div>;
  }
}
