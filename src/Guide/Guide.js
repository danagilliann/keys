import React, { Component } from 'react';
import '../Guide/Guide.css';

export default class Guide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.guideText,
      id: props.guideId,
    }

    this._hideButton = this._hideButton.bind(this);
  }

  _hideButton() {
    let guide = document.getElementById(this.state.id);

    guide.style.display = 'none';
  }

  render() {
    return <div id={this.state.id} className='Guide'>
      <p className='text'>{this.state.text}</p>
      <button className='button' onClick={this._hideButton}>X</button>
    </div>;
  }
}
