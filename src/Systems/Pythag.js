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

  // D - 594
  key2() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(594, now, now + 5, 0.1);
  }

  // E - 668
  key3() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(668, now, now + 5, 0.1);
  }

  // F- - 704
  key4() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(704, now, now + 5, 0.1);
  }

  // G - 792
  key5() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(792, now, now + 5, 0.1);
  }

  // A - 891
  key6() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(891, now, now + 5, 0.1);
  }

  // B - 1002
  key7() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(1002, now, now + 5, 0.1);
  }
}
