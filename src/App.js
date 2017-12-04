import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './App.css';
import Keyboard from './Keyboard/Keyboard.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bpm: 120,
      system: 'Harmonic'
    }
  }

  _setSystem(option) {
    this.setState((prevState) => {
      return {system: option.label};
    });
    // this.setState({system: option.label});
    console.log(this.state);
  }

  render() {
    const options = ['Harmonic', 'Pythag', 'ET'];
    const defaultOption = options[0];

    return (
      <div className='App'>
        <div className='system-bpm-container'>
          <div className='div-bpm'>
            <h1 className='h1-bpm'>
              {this.state.bpm}
            </h1>
          </div>
          <div className='div-system'>
              {/*// TODO: Style */}
              <Dropdown options={options} onChange={this._setSystem} value={defaultOption} placeholder='Harmonic' />
          </div>
        </div>
        <div className='App-Keyboard'>
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
