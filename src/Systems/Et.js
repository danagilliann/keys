import Sound from '../Sounds/Sounds.js';

export default class Harmonic {

  constructor(audioContext) {
    this.audioContext = audioContext;
    this.root = document.getElementById('root');
  }

  // C - 528
  key1() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(528, now, now + 5, 0.1);
  }

  animateKey1() {
    let key = document.getElementById('C-1');
    let floatingKey = key.cloneNode();

    this.root.appendChild(floatingKey);

    console.log(floatingKey);
  }

  // D - 593
  key2() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(593, now, now + 5, 0.1);
  }

  // E - 665
  key3() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(665, now, now + 5, 0.1);
  }

  // F- - 705
  key4() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(705, now, now + 5, 0.1);
  }

  // G - 791
  key5() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(791, now, now + 5, 0.1);
  }

  // A - 888
  key6() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(888, now, now + 5, 0.1);
  }

  // B - 997
  key7() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(997, now, now + 5, 0.1);
  }
}
