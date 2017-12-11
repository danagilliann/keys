import React, { Component } from 'react';
import '../Key/Key.css';

export default class Key extends Component {

  constructor(props) {
    super(props);

    this.state = {
      note: props.note,
      num: props.num
    };
  }

  render() {
    let id = this.state.note.concat('-').concat(this.state.num);

    return(
      <div className="Key" id={id}>
        <h1 className="Note">{this.state.note}</h1>
        <p className="Num">{this.state.num}</p>
      </div>
    );
  }

}
