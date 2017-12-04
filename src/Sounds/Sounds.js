export default class Sound {

  constructor(audioContext) {
    this.audioContext = audioContext;
  }

  init() {
    this.oscillator = this.audioContext.createOscillator();
    this.gain = this.audioContext.createGain();

    this.oscillator.connect(this.gain);
    this.gain.connect(this.audioContext.destination);
    this.oscillator.type = 'sine';
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async beat(freq_value, startTime, volume, bpm) {
    let sleep = 60.0 / bpm
    this.init();

    this.oscillator.frequency.value = freq_value;
    this.gain.gain.setValueAtTime(volume, this.audioContext.currentTime);

    this.oscillator.start(startTime);
    this.stop(startTime + sleep);
  }

  play(freq_value, startTime, endTime, volume) {
      this.init();

      this.oscillator.frequency.value = freq_value;
      this.gain.gain.setValueAtTime(volume, this.audioContext.currentTime);

      this.oscillator.start(startTime);

      if (endTime !== undefined) {
        this.stop(endTime);
      }
  }

  stop(time) {
    this.gain.gain.exponentialRampToValueAtTime(0.001, time);
    this.oscillator.stop(time + 1);
  }
}
