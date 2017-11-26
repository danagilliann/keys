import Sound from '../Sounds/Sounds.js';

export default class Harmonic {

  constructor(audioContext) {
    this.audioContext = audioContext;

    console.log('hello');
  }

  key1() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(528, now, now + 5, 0.1);

    console.log('hello');
  }
}
