import Sound from '../Sounds/Sounds.js';

export default class Ptolemy {

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

  // E - 660, reduce
  key3() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(660, now, now + 5, 0.1);
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

  // A - 880.0, reduce
  key6() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(880.0, now, now + 5, 0.1);
  }

  // B - 990.0, reduce
  key7() {
    let note = new Sound(this.audioContext);
    let now = this.audioContext.currentTime;

    note.play(990.0, now, now + 5, 0.1);
  }
}
